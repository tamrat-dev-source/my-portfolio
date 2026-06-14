# Daxios - Gamified DAX Learning App

## Project Overview

Daxios is a web-first, gamified DAX learning app built to help Power BI learners practice beginner DAX formulas through lessons, quizzes, XP, streaks, badges, formula review, and mistake detection.

The app teaches users how to think like a Power BI analyst by turning beginner DAX concepts into short learning missions, scenario-based questions, retry-based quiz behavior, formula practice, and guided debugging.

## Project Status

Current status: Version 1 Beginner Local Demo Complete

This project is ready for local demo and portfolio documentation. It is not ready for public launch until release, security, IP, legal, and final demo cleanup tasks are complete.

## Problem

Many beginner Power BI learners struggle with DAX because formulas often feel abstract, technical, and disconnected from real business scenarios.

Common beginner problems include:

* Not knowing when to use SUM, AVERAGE, COUNT, COUNTA, or IF.
* Memorizing syntax without understanding business use cases.
* Confusing measures, calculated columns, KPI cards, and formula logic.
* Getting stuck when a formula is wrong.
* Losing motivation because practice tools feel too technical or boring.

## Solution

Daxios turns beginner DAX practice into a guided learning game.

The app uses:

* Structured beginner lessons.
* Scenario-based quiz questions.
* XP, levels, streaks, and badges.
* Retry behavior without revealing the correct answer too early.
* Formula Notebook for unlocked formulas.
* Formula Helper for searching by goal or function.
* Mistake Detective for debugging broken beginner DAX formulas.
* Playwright regression testing to protect core user flows.

## Version 1 Scope

Version 1 focuses only on the Beginner Zone.

Included in Version 1:

* Home screen
* Beginner Zone Roadmap
* 8 beginner lessons
* Formula Helper
* Formula Notebook
* Mistake Detective
* Beginner DAX Badge completion flow
* Local XP, level, streak, and progress state
* Playwright testing
* Release readiness documentation

Not included in Version 1:

* User authentication
* Payments
* AI features
* Supabase database
* Mobile app store release
* Public production launch

## Beginner Zone Lesson Structure

The Beginner Zone contains 8 lessons:

1. What is DAX?
2. Why Use DAX?
3. SUM Basics
4. AVERAGE Basics
5. COUNT Basics
6. COUNTA Basics
7. IF Basics
8. Measures, Columns, KPI Cards, and Badge Challenge

Each lesson uses scenario-based questions and requires an 80 percent score to pass.

## Key Features

### Beginner Zone Roadmap

The Beginner Zone Roadmap shows all 8 lessons and tracks user progress through the beginner learning path.

It helps users understand:

* Which lessons are available.
* Which lessons are complete.
* Which lesson comes next.
* When the Beginner DAX Badge is unlocked.

### Scenario-Based Lessons

Each lesson teaches DAX through business scenarios instead of isolated formulas.

Example scenarios include:

* Sales reporting
* Donations and nonprofit reporting
* Inventory tracking
* Family and program enrollment
* Project status reporting
* KPI card logic

### Retry Behavior

Wrong answers do not automatically reveal the correct answer.

Users can keep trying until they understand the correct logic. This supports learning instead of guessing.

### XP, Level, and Streak System

The app tracks user progress with:

* XP
* Level
* Streak
* Lesson completion
* Badge completion

This creates motivation and gives users a clear sense of progress.

### Beginner DAX Badge

After completing Lesson 8, the user unlocks the Beginner DAX Badge.

The Home screen then changes to show:

* 8 lessons completed
* 0 lessons remaining
* Badge status as complete
* Beginner Zone Complete mission card

### Formula Helper

The Formula Helper lets users search for formulas by:

* Business goal
* DAX function name

Examples:

* Searching "Total sales" returns SUM and related formula suggestions.
* Searching "IF" returns the IF logic formula.
* Future formulas like CALCULATE and FILTER remain marked as later content.

### Formula Notebook

The Formula Notebook shows beginner formulas unlocked through the lessons.

Unlocked beginner formulas:

* SUM
* AVERAGE
* COUNT
* COUNTA
* IF

Future formulas remain locked for later Daxios zones.

### Mistake Detective

Mistake Detective gives users broken beginner DAX formulas and asks them to identify what is wrong.

The corrected formula stays hidden until the user solves the case.

This helps users practice debugging, not just memorizing syntax.

## Technical Stack

* React Native
* Expo
* TypeScript
* JavaScript
* LocalStorage
* Playwright
* Git
* GitHub
* VS Code

## Testing and Quality Control

The Version 1 Beginner flow was validated with TypeScript and Playwright.

Validation completed:

* TypeScript check passed.
* Full Playwright regression passed.
* 140 tests passed.
* Mobile visual review completed.
* Formula Helper tested.
* Formula Notebook tested.
* Mistake Detective tested.
* Beginner Zone Roadmap tested.
* Reset XP testing control hidden from the user-facing app.

## Release Readiness Work Completed

Release readiness documentation was created to track what is complete and what still needs review before public launch.

Created documentation files:

* Daxios_Blueprint.md
* Daxios_Feature_Log.md
* Daxios_Release_Readiness_Checklist.md
* Daxios_Security_IP_Review_Log.md
* Daxios_Patentable_Feature_Log.md
* Daxios_Portfolio_Case_Study.md

## Security and IP Review Notes

Version 1 does not include authentication, payments, or AI.

Current risk notes:

* Payment risk: none for Version 1 because payments are not included.
* AI risk: none for Version 1 because AI is not included.
* Trademark risk: unknown until formal search is completed.
* Copyright risk: low if all lesson content remains original.
* Licensing risk: requires dependency and asset review before public launch.
* Patent claim risk: controlled as long as no patent claims are made.
* Public demo risk: moderate until testing controls are hidden and release review is complete.

This documentation is not legal advice. Formal patent, trademark, copyright, and licensing decisions should be reviewed with a qualified attorney.

## Business Impact

Daxios demonstrates the ability to design and build a practical learning product from concept to tested local demo.

The project shows skills in:

* Product planning
* UX design
* Learning flow design
* Beginner-friendly technical education
* React Native development
* TypeScript implementation
* QA testing
* GitHub version control
* Release documentation
* Portfolio-ready product storytelling

## Portfolio Value

This project strengthens the portfolio by showing more than dashboard development.

It proves the ability to:

* Build a real interactive product.
* Translate Power BI knowledge into a learning experience.
* Design structured lessons and user flows.
* Create validation rules and testing coverage.
* Document product scope, release readiness, and IP risk.
* Use GitHub professionally across a full project lifecycle.

## Key Results

* Built Version 1 Beginner Zone with 8 lessons.
* Implemented 80 percent pass requirement.
* Added retry behavior without revealing correct answers.
* Added XP, level, streak, and badge tracking.
* Built Formula Helper.
* Built Formula Notebook.
* Built Mistake Detective.
* Completed mobile visual review.
* Hid user-facing testing controls.
* Passed TypeScript validation.
* Passed full Playwright regression with 140 passing tests.
* Published project to GitHub.
* Added Daxios project card to live portfolio website.

## GitHub Repository

GitHub project:

https://github.com/tamrat-dev-source/Daxios

## Live Portfolio

Portfolio website:

https://tamrat-dagnew-portfolio.netlify.app

## Final Summary

Daxios is a gamified beginner DAX learning app built to help Power BI learners practice formulas, understand business use cases, debug mistakes, and stay motivated through XP, badges, and structured progression.

Version 1 is complete for local demo and portfolio documentation. The project should remain in release readiness review before any public launch.
