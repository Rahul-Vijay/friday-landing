---
title: "What is an AI agent harness?"
description: "An AI agent harness runs coding agents like Claude Code and Codex toward a goal you set: it picks the agent, checks the work, and loops until it's done. Here's how that differs from a chatbot, a copilot, and a framework."
pubDate: 2026-07-06
tags: ["agents", "explainers"]
---

An AI agent harness is software that runs other AI agents toward a goal you set. You describe an outcome, and the harness breaks it into tasks, picks which agent or model should handle each one, runs them, checks the results, and loops until the goal is met. The agents do the work. The harness decides who works on what, and whether the work is actually done.

The term comes from testing: a test harness is the rig that runs your tests, collects results, and reports failures. An agent harness plays the same role for AI agents like Claude Code, Codex, and OpenCode. Each of those is very good at executing tasks. None of them decides what the next task should be, whether a different model would do it better, or whether the output actually satisfies what you asked for. That coordination layer is the harness.

## How is a harness different from a chatbot or copilot?

A chatbot answers you. A copilot works beside you, one suggestion at a time, inside an editor. Both stop the moment you stop prompting.

A harness inverts that. You give it a goal once ("build a landing page for this product," "research this market and write a brief") and it keeps going without you: planning tasks, delegating them, reviewing results, retrying failures. You come back to a finished thing rather than a conversation.

The practical difference shows up in who holds the loop. With a copilot, you are the loop: you read every suggestion and decide what happens next. With a harness, the software holds the loop and you review the outcome.

## How is it different from an agent framework?

Frameworks like LangChain or CrewAI are libraries. You write code that defines agents, tools, and control flow, then you maintain that code. They're aimed at developers building agent products.

A harness is a finished application. There's nothing to program; the routing and verification logic ships with it. The tradeoff is flexibility for immediacy, the same tradeoff as between a game engine and a finished game.

## What does a harness actually do?

Concretely, a harness earns its keep in four jobs:

**Routing.** Different models have different strengths, and the gaps are real. In day-to-day use, Claude models tend to produce better design and writing, Codex is strong at code generation and code review, and open models running through something like OpenCode handle high-volume, low-stakes work at a fraction of the cost. A harness knows these tendencies and assigns each task accordingly, so you never sit there deciding which model to open.

**Parallelism.** A goal like "build and launch a marketing site" decomposes into research, copy, design, build, and review. Several of those can run at the same time in separate agent sessions. Harnesses manage those parallel sessions the way an engineering manager staffs a sprint.

**Verification.** This is the part most people underestimate. Agents finish confidently whether or not the work is right. A harness treats "the agent says it's done" as a claim to check, not a result to accept: it re-runs, tests, and compares output against the goal, then sends failures back. The build-verify-fix loop is what separates "an agent ran" from "the thing works."

**State.** Long-running goals accumulate context: decisions made, files touched, style preferences. The harness keeps that state across agents and sessions so task twelve remembers what task three decided.

## When do you want one?

If you fire off single questions or edit code function by function, you don't need a harness; a chatbot or copilot is the right tool. A harness starts paying for itself when the work has more than a handful of steps, when the steps would benefit from different models, or when checking the output takes longer than describing the goal. Multi-page sites, research reports, marketing campaigns, refactors that touch dozens of files: that shape of work.

## Where Friday fits

[Friday](https://getfriday.dev/) is our take on the harness idea, built as a desktop app. You set a goal, and it hires the crew: each task goes to whichever agent does it best (Claude Code, Codex, OpenCode, Gemini CLI, and others), the crew runs in parallel on one canvas you can watch and join, and Friday loops until the work is verified and done. It runs on your own subscriptions and API keys, locally. We're pre-launch; the [waitlist is open](https://getfriday.dev/#pricing), and the first 100 beta users get half off.
