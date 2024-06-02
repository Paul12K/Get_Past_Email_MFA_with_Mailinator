Cypress.Commands.add('login', () => {
    const email = Cypress.env('email');
    const password = Cypress.env('password');
    const mailinatorDomain = Cypress.env('mailinatorDomain');
    const mailinatorInbox = Cypress.env('mailinatorInbox');
    const mailinatorApiToken = Cypress.env('mailinatorApiToken');

    cy.visit('/');
    cy.get('#Input_Username').type(email);
    cy.get('#Input_Password').type(password);
    cy.get('#Submit_logins').click();

    // Static wait to ensure email is received
    cy.wait(5000);

    // Fetch the latest message ID
    cy.request({
        method: 'GET',
        url: `https://mailinator.com/api/v2/domains/${mailinatorDomain}/inboxes/${mailinatorInbox}`,
        headers: {Authorization: `Bearer ${mailinatorApiToken}`}
    }).then(response => {
        const sortedMessages = response.body.msgs.sort((a, b) => b.time - a.time);
        const latestMessageId = sortedMessages[0].id;

        // Fetch the specific message
        cy.request({
            method: 'GET',
            url: `https://mailinator.com/api/v2/domains/${mailinatorDomain}/inboxes/${mailinatorInbox}/messages/${latestMessageId}`,
            headers: {Authorization: `Bearer ${mailinatorApiToken}`}
        }).then(response => {
            const htmlBody = response.body.parts[0].body;
            const mfaToken = extractMFA_Code({htmlBody});

            cy.log("INFO " + mfaToken);
            cy.get('#token').type(mfaToken);
            cy.get('#token_ver_but').click();
        });
    });

    function extractMFA_Code({htmlBody}) {

        //IMPORTANT
        //regex pattern ought to be adjusted to the pattern the code from your MFA email contains
        const regex = /Use verification code (\d{6})/i;
        const match = regex.exec(htmlBody);
        return match ? match[1] : "No verification code found";
    }
});