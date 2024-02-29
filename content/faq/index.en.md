---
title: "Tawkie - Frequently Asked Questions"
description: |
  Frequently asked questions about Tawkie, the all-in-one messenging app
  helping you save time and increase your digital wellbeing
date: 2023-07-10
---

## Can I send voice messages, videos, images... ?

Yes! These different types of content can be sent on most social networks,
depending on the features they support.

Files can also be sent on certain networks. We plan to extend this feature
where file sending is not natively supported, by providing a download link.


## Do the messages I send from Tawkie appear on my social networks?

Yes! Messages sent from Tawkie will be visible from social network apps.

The reverse is not always true, on some platforms, messages that you send may
not be visible on Tawkie. However, messages that you receive from your contacts
are visible.


## Who can use Tawkie?

Currently, the alpha testing phase is limited to adults residing in France.
Eventually, Tawkie is intended to be available for other audiences.


## Why do I have to download Element to take advantage of Tawkie's service?

Tawkie relies on the [Matrix][matrix] technology. Matrix defines how a server
(Tawkie) and a client (your phone or computer) can communicate to exchange
messages in a secure and federated way.

To connect to Tawkie, you need to use an application that complies with the
Matrix specification. There are [several][matrix-clients]; we recommend
[Element][element].

We are working on developing a Tawkie application with more specific features.

[matrix]: https://matrix.org/
[matrix-clients]: https://matrix.org/ecosystem/clients/
[element]: https://matrix.org/ecosystem/clients/element/


## When will the final application be ready?

We plan to release it in early 2024.


## How to connect to Tawkie?

After downloading [Element][element] or visiting the [web
application][element-web-alpha], log in with the following information:

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

## I can't find the answer to my question, how can I contact you?

Sorry that this FAQ couldn't help you.

If you're connected on Tawkie, send us a message via [Honoroit][helpdesk].

Otherwise, send us an email at [contact@tawkie.fr](mailto:contact@tawkie.fr).

If it's a technical question, send an email to
[root@tawkie.fr](mailto:root@tawkie.fr).

