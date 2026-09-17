# Asking customers for Google reviews

Reviews are the biggest single lever on both where the Business Profile ranks and
whether someone calls after finding it. They are also the thing most trades never
get around to, because the asking feels awkward.

The fix is to make it a habit at the end of every job rather than a campaign.

---

## Get the link first

In the Business Profile, use **Ask for reviews** — Google generates a short link
that opens the review box directly, in the form `g.page/r/…`.

Save it as a text-replacement shortcut on the phone (iPhone: Settings → General →
Keyboard → Text Replacement; Android: Settings → System → Languages & input →
Personal dictionary). Set a shortcut like `revlink` so it expands to the full URL
as you type. Without this, the asking will not happen.

---

## When to send

**Same day the job finishes, or first thing the next morning.** Response rates
fall off sharply after that — by the following week the customer has moved on and
it feels like a cold ask.

Best of all: ask in person at handover, *then* send the link while you are still
standing there. A verbal ask followed by a link converts far better than a link
on its own.

---

## The messages

Placeholders: `[Name]`, `[job]`, `[suburb]`, `[link]`.

### In person, at handover

> "Glad you're happy with it. One thing that'd really help me — most of my work
> comes from people finding us on Google. If you wouldn't mind leaving a quick
> review, I'll text you the link now so it's on your phone."

Then send the SMS before you leave.

### SMS — the main one

> Hi [Name], Akramul here from AUS Building. Thanks again for having us out for
> the [job]. If you've got a spare minute, a quick Google review would really
> help us — it's how most people around [suburb] find us: [link]
>
> And if anything needs looking at, ring me first and I'll come back and sort it.

That last line does a lot of work. It gives anyone with a problem a direct route
to you instead of to the review box, and it signals you stand behind the job.

### WhatsApp — when you have a good photo

The business card already points people to WhatsApp, so plenty of customers will
be on it. Send the finished-job photo with it — it prompts them to remember how
pleased they were.

> Hi [Name] — Akramul from AUS Building 👋 Here's how the [job] turned out.
>
> Thanks again for the work. If you've got a minute, a Google review helps us
> more than anything else: [link]
>
> Anything not right, give me a ring and I'll come back.

### Follow-up — once, about five days later

Send this only once. If they do not respond to the nudge, leave it.

> Hi [Name], Akramul from AUS Building — just floating this back up in case it
> got buried. No stress if you'd rather not: [link]

### Email — for larger jobs

For renovations and extensions where you have been on site for weeks and there is
a real relationship.

> Subject: Thanks from AUS Building
>
> Hi [Name],
>
> Now that the [job] is finished, thanks again for trusting us with it — it was a
> good job to be part of.
>
> If you were pleased with how it went, would you mind leaving us a Google review?
> It only takes a minute and it is genuinely the main way new customers find us.
>
> [link]
>
> And if anything needs attention down the track, just call me on 0466 079 819.
>
> Cheers,
> Akramul
> AUS Building and Maintenance Service Pty Ltd
> Licence No. 15383711

---

## Three rules that protect the profile

**1. Send it to everyone, not just the happy ones.**
Screening customers and only sending the link to the pleased ones is called review
gating. It breaches Google's policy and can get reviews removed or the profile
suspended. Ask everyone, every time — the message above handles unhappy customers
by routing them to a phone call, which is legitimate.

**2. Never offer anything in exchange.**
No discounts, no entry into a draw, no discount on the next job. Google prohibits
incentivised reviews, and in Australia the ACCC treats them as misleading conduct.
This applies to "leave us a review and we'll knock $50 off" in any form.

**3. Do not blast the whole customer list at once.**
A brand new profile that suddenly receives fifteen reviews in two days looks
inorganic, and Google's filter will often hold or drop them. If you are going back
through past customers, send a handful a week. A steady trickle is worth far more
than a burst.

---

## Respond to every review

Replying is a ranking signal, and prospective customers read the replies as
closely as the reviews. Aim to respond within a few days.

**To a good review** — short, specific, no template feel:

> Thanks [Name], appreciate you taking the time. Was a good job to be on — enjoy
> the new deck.

**To a critical review** — the one that matters most, because everyone reads it.
Stay calm and factual, do not argue the details in public, and move it offline:

> Thanks for the feedback [Name], and sorry it fell short. That is not the standard
> we work to. I would like to put it right — could you give me a call on
> 0466 079 819 so we can sort it out?

Never dispute the customer's account publicly or mention payment disputes. A
measured reply to a bad review reads better to future customers than a profile
with no bad reviews at all.

---

## Feeding reviews back into the website

The three testimonials in [`site/src/data/site.ts`](../site/src/data/site.ts) are
still placeholders. Once real Google reviews come in, quote them there with first
name, suburb and service:

```ts
{
  quote: 'Their actual words, trimmed to two or three sentences.',
  name: 'First name',
  suburb: 'Suburb, QLD',
  service: 'Decking',
}
```

Use their words as written rather than tidying them up — the slightly rough ones
read as more genuine than polished marketing copy.

---

## Related

- Profile setup: [`google-business-profile.md`](google-business-profile.md)
- Business details: [`site/src/data/site.ts`](../site/src/data/site.ts)
