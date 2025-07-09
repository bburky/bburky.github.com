---
title: "Keycloak verify existing account by email could be performed with a spoofed email"
date: 2025-07-08
url: https://github.com/keycloak/keycloak/issues/40446
cve:
  CVE-2025-7365: https://access.redhat.com/security/cve/CVE-2025-7365
class: notecard-4x6
tags: cve
---

Keycloak uses the "First Broker Login" authentication flow for a users's first login via a federated IdP. If a matching Keycloak already exists, the user is prompted to review their profile and may edit fields such as email. If the user edits their email to match a different existing victim user, they can attempt to link their external IdP to someone else's account.

The security impact is fairly low however, because an email is sent to the victim and a link must be clicked within 5 minutes. This still presented a minor phishing risk and Keycloak mitigated the issue by no longer trusting the email if it was edited by the user, skipping "Verify Existing Account By Email" and now requires "Verify Existing Account By Re-authentication".

* [Report](https://github.com/keycloak/keycloak/issues/40446)
* [Fix](https://github.com/keycloak/keycloak/pull/40520)
* [Upgrade note](https://www.keycloak.org/docs/latest/upgrading/index.html#verify-existing-account-by-email-is-only-executed-for-the-email-and-username-sent-by-the-identity-provider)
* [Red Hat CVE](https://access.redhat.com/security/cve/CVE-2025-7365)
* [Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=2378852)
