---
title: "Tawkie - Frequently Asked Questions"
description: |
  Frequently asked questions about Tawkie, the all-in-one messenging app
  helping you save time and increase your digital wellbeing
date: 2023-07-10
---

## Can I send voice messages, videos, images...?

Yes! These different types of content can be sent on most social networks, depending on the supported features.

Files can also be sent on certain networks. We plan to expand this functionality to networks where file sending is not natively supported (Instagram, for example), by providing a download link.

Currently, some types of images are sometimes not received well on Instagram. We'll let you know in the conversation if an image hasn't been transmitted properly. We're actively working to fix this small bug.

## Do the messages I send from Tawkie appear on my social networks?

Yes! Messages sent from Tawkie will be visible from social media applications.

The reverse isn't always true; on some platforms, the messages you send aren't visible on Tawkie (WhatsApp or Instagram, for example). However, all the messages you receive from your contacts are.

## Can my contacts see that I'm using Tawkie?

No! Your messages will appear the same as before, and your contacts won't be able to tell that you're using Tawkie to chat with them.

## Who can use Tawkie?

Tawkie is an application available worldwide for adults.

## Where can I create an account?

Due to demand, Tawkie currently operates on a waiting list basis. To sign up, visit our website [tawkie.fr](https://www.tawkie.fr), click on "Sign Up", enter and validate your email to secure your spot in the waiting list. You'll then be able to choose your username and see your position in the queue.

[tawkie]: https://www.tawkie.fr

## How long is the waiting list?

We're doing our best to open as many accounts as possible every day. The average wait time at the moment is around 7 days. 

## What do the servers alpha.tawkie.fr and loveto.party correspond to?

Tawkie relies in part on [Matrix](https://matrix.org/) technology. Matrix is installed on servers where different user accounts are distributed. The alpha.tawkie.fr server is yours, that of the clients, and loveto.party is the server we use with our teams to work and test.

## How do I log in to Tawkie?

When you reach the end of the waiting list, we'll notify you via email, and you'll be able to log in to Tawkie! After downloading and launching the Tawkie application, you can enter your username and temporary password. Make sure to select the **alpha.tawkie.fr** server. It's important to change your password as soon as possible to limit risks.

## How do I log in to different social networks?

Before logging in to Tawkie (and in general), it's IMPORTANT to enable two-factor authentication (2FA - available in the security settings of your social networks). This enhances the security of your account and prevents platforms from being concerned about a new connection.

To log in, you can click on the "Connect an Account" tab and choose the social network you want to connect to. Once connected, your recent conversations for each network should appear.

## How can I send a Direct Message (DM)?

For some networks, you have the option to create a new conversation directly from Tawkie. To do this, you can use the "New Conversation" function and search for the person you want to send a new message to.

## Can I connect 2 accounts from the same social network on Tawkie?

Currently, Tawkie doesn't offer this possibility, but we're currently working on its development, and we hope to integrate it into the application before summer 2024.

## Can I uninstall the applications now?

Initially, we recommend keeping them installed for at least a few days to ensure everything is working smoothly.

Applications depending on the phone number must be kept installed, especially:
- WhatsApp
- Signal
- Telegram

Other applications can be uninstalled, but we recommend keeping them installed just in case. However, you can turn off notifications to avoid to receive it twice for each message.

## How does Honoroit, the support service, work?

To get assistance from Tawkie, the simplest way is to send a message to `@honoroit:alpha.tawkie.fr`. This new conversation will open a support ticket to which we can respond!

## How can I delete my account?

To delete your account, simply send us a message on Honoroit (see previous question). Alternatively, send us an email at [contact@tawkie.fr](mailto:contact@tawkie.fr).

## I can't find an answer to my question, how can I contact you?

Sorry that this FAQ couldn't help you.

If you're logged into Tawkie, send us a message via [Honoroit](#).

Otherwise, send us an email at [contact@tawkie.fr](mailto:contact@tawkie.fr).

If it's a technical question, send an email to [root@tawkie.fr](mailto:root@tawkie.fr).

```
Homeserver : matrix.alpha.tawkie.fr
Username   : username
Password   : password
```

Once connected, **change your password** in the settings !

If you encounter a problem logging in, send us a message at
[contact@tawkie.fr](mailto:contact@tawkie.fr).

[element-web-alpha]: https://element.alpha.tawkie.fr/


## How to connect to different social networks?

It is IMPORTANT to enable two-factor authentication (2FA) before trying to
connect. This strengthens the security of your account and prevents platforms
from being alarmed by a new connection.

Once logged in to Tawkie, send a message to the following bots:

```
Facebook Messenger : @facebookbot:alpha.tawkie.fr
Instagram          : @instagrambot:alpha.tawkie.fr
Whatsapp           : @whatsappbot:alpha.tawkie.fr
Signal             : @signalbot:alpha.tawkie.fr
LinkedIn           : @linkedinbot:alpha.tawkie.fr
```

Once the conversation has started, send the `help` command to display available
commands. Generally, you need to connect with the `login` command (after
enabling 2FA on the network in question).

Once connected, your recent conversations should appear. To reach unlisted
people, you can usually use the `search` command in the conversation with the
bot. Otherwise, try sending a message from the messaging app in question.


## How to connect to LinkedIn?

Connecting to LinkedIn is more technical than for the others. For now, you have
to follow the following method:

1. Open a conversation with the LinkedIn Bridge bot
   (`@signalbot:alpha.tawkie.fr`)
2. Open a new Private Browsing Window
3. Navigate to https://www.linkedin.com
4. Sign in
5. Open the Storage Tab of the developer tools (Shift + F9 in Firefox) or the
   panel displaying cookies. Documentation for [Firefox][cookies-firefox],
   [Chrome][cookies-chrome].
6. Locate the `li_at` and `JSESSIONID` cookies.
7. Send a message to the LinkedIn Bridge bot with the following syntax : `login
   <li_at> <jsessionid>`. For example : `login MySuperLongLiAtToken
   ajax:mysessiontoken`. There should be no double quotes (`"`).
8. Contact the [helpdesk][helpdesk] if unsuccessful.

[cookies-firefox]: https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html
[cookies-chrome]: https://developer.chrome.com/docs/devtools/application/cookies/
[helpdesk]: #how-does-honoroit-the-troubleshooting-service-work

## Can I uninstall the apps now?

Initially, we recommend keeping them installed for at least a few days to make
sure everything works well.

Apps that depend on the phone number must be kept installed, especially:
- Whatsapp
- Signal
- Telegram

Other apps seem to be uninstallable, but we recommend keeping them installed.


## How to navigate my messages even more efficiently?

On your computer, [Element][element] offers a plethora of shortcuts, visible
by performing the `ctrl + /` shortcut.

## What does the error "⚠ Your reaction may not have been bridged: unknown target event " mean?

On Instagram, when someone sends us a post, we receive several messages
containing the image/video then the description. You can add a reaction to the
last message (often containing the link to the post). When you react to one of
the other messages, you get this error.

## How does Honoroit, the troubleshooting service helpdesk, work?

To get assistance from Tawkie, the easiest way is to send a message to
`@honoroit:alpha.tawkie.fr`. This new conversation will open a support ticket
that we can respond to!

## How can I delete my account?

For now, the easiest way is to send us a message on Honoroit (see previous question).
Alternatively, send us an email at [contact@tawkie.fr](mailto:contact@tawkie.fr).


## I can't find the answer to my question, how can I contact you?

Sorry that this FAQ couldn't help you.

If you're connected on Tawkie, send us a message via [Honoroit][helpdesk].

Otherwise, send us an email at [contact@tawkie.fr](mailto:contact@tawkie.fr).

If it's a technical question, send an email to
[root@tawkie.fr](mailto:root@tawkie.fr).

