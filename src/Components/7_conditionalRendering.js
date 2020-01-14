import React from "react";

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;

    // if (unreadMessages < 1) return null // если просто retun будет ошибка

    return (
        <div>
            <h1>Здравствуйте!</h1>
            {unreadMessages.length > 0 &&
            <h2>
                У вас {unreadMessages.length} непрочитанных сообщений.
            </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
// const messages = [] // не выведет

export default function MailboxMain() {
    return <Mailbox unreadMessages={messages} />
    // return (
        {/*<>*/}
        {/*    <h1>Hi!</h1>*/}
        {/*    <Mailbox unreadMessages={messages} />*/}
        // </>
        // )

}

