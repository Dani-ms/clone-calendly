- Good design is design you don't notice 

- keep everything **simple**
  - avoid having to do steps to get somewhere, like `you have to do x everytime you want y`
  - you want to make it possible for the dumbest person ever to setup and change the project
  - pick the technologies that do more with less. Avoid writing code. When your project finds market fit and gets more funding, we can then see which parts of the project need a more customized approach and need more code.
  - everything must be designed to be quick to change and quick to play around with
  - "less is more"
  - your code should not need comments. Comments create duplicated clutter that also needs to be kept update. Your code should be self-explanatory
    - do not put comments stating the obvious. Your code should be explicit enough 
      - Bad example
        ```python
        # Assuming you want to check if a certain field in the response JSON is not empty
        if response.json().get("value"):  # This will be true if 'value' is not empty
            return False  # Do not proceed with insertion as 'value' is not empty
        else:
            return True 
        ```

- make sure everything can be easily replaced
  - do not let a bad technical choice be permanent or hard to chance
  - parts of the software must be easily replaced as the project grows
  - bad code is allowed as long as it either well isolated and the core of it can be changed without impacting other parts of the project
  - techniques for keeping code replaceable
    - Dependency Injection
      - _IoC (Inversion of Control)_ containers like in NestJS or Spring
      - having a factory function that receives dependencies and returns an object with methods
    - React Hooks
    - React Context
  - avoid code that affects the project globally
  - avoid code that acts in implicit ways
  - build the project in a way that feature X can be build in a completely different way and using different libraries than feature Y

- everything must be **predictable** to other collaborators and even AI tools
  - again, do not assume that a colleague should know or do something
  - do not structure something assuming other people must understand or know specific rules
    - example: do not create an controller or service abstract class and assume everybody knows they have to extend from it in every controller or service they create
  - avoid code that affects the whole project globally. prefer composition.
    - Each feature has different requirements, and one day what fits the whole project might not be the desired behaviour for a new feature
    - Examples of what NOT to do and why:
      - overriding a library setting that affects all calls
      - in a backend project: setting a global middleware for validation. It makes it harder to replace said middleware or library in the future, in case bigger needs arise. Instead of setting a sigle validation library with a global middleware, make this middleware something you can plug in individual endpoints or functions, so that it needs to be called explicitly, and different endpoints can have different libraries as needs change.
      - setting a single global middleware for authentication. Needs might change: we might want 2 different authentication schemes: one for users and one for internal API calls, both returning different authentication data.
  - Explicit is better than implicit
    - Example: do not create modules called `utils` or `helpers`
  - do not override 3rd party or standard libraries and methods
    - always prefer to use the defaults of a library or technology
      - it makes the behaviour of the code more predictable, since there are no side-effects or hidden logic surprising you during development
    - people who develop these libraries usually know what's best and pick good defaults
    - keep things standard
  - only create abstractions for business logic. avoid creating abstractions for technical reasons
    - do not create abstractions on top of the functionalities that the tech stack your using already offers
      - this makes the project more predictable: you know that the right way of building things is the way described in the technology's official documentation
      - example: creating a react hook for date and time manipulation when you can call `date-fns` or the standard `Date` methods directly
    - AI tools won't be able to generate code for us if we create our own abstractions over the technologies we are using
      - the old developer's paradigm of creating custom abstractions won't work in the future. If you want your code to be repurposed and augmented by AI, you need to avoid creating abstractions on top of the technologies you use. AI knows about code described in official documentation, not about your custom utilities that only your company uses. Try to stick with the default APIs offered by the technology you are working on. Do not do weird things like abstracting built-in methods. Use UI libraries, but customize them through the documented ways, etc, etc.
    - by avoiding purely technical abstractions, we make the code more dependent on the documentation available on the Internet (available 24/7), and less dependent of the person who wrote it (not always available every day at every hour)
    - keep documentation as closest to its implementation as possible

- start with the outer layer of a problem, and then implement its solution from outside to the inside. start with the solution's input and output types and then implement its core. _"program to interfaces, not implementations"_

- Prioritize Minimum Viable Product (MVP):
  - Focus on core features first.
  - Rapidly prototype to test market fit.
  - Allocate resources to areas with proven demand.

- Sort code by feature (users, payments, auth, videos, etc...), NOT by tech layer (models, views, controllers)
  - tech layers change depending on the tech stack and type of project. Features are the universal language of the project
    - if you sort by tech layers, you need to know what tech layers there are in the tech stack and be confortable with it. With features, you already know where to place new code, be it Python, Go or Javascript
  - easier to spot where changes are needed
  - easier for someone new, or someone who was just dropped in the project for a quick change, to understand the whole composition of the project and what understand what it does
  - if you have code, it's for a feature in the project, but if you sort code by tech layer, that same code might not fit into any category and will end up in some dump directory like `utils`
  - easier to spot code that can be abstracted into a reusable module
  - features evolve at diferent speeds and have different priorities. It's normal that one feature becomes more complex than others, or have more technical debt than others. It's a mistake to assume that all features will need the same technical layers (models, views, controllers, etc.), the same libraries, and the same depth of files and directories. A feature might require 2 database models, another feature might require none. We should also keep features contained in their place so that we only focus on our current scope, and don't let the complexity of other features distract us

- do not optimize or modularize code before there is an actual need TODAY to reuse it or have better performance
  - **YAGNI**

- keep files small. do not have documents with many lines of code
  - use Dependency Injection and React Hooks to split code into many pieces

- Avoid side-effects and unpredictable behaviours that happen behind the scenes

- The scope of your project and its code should be as localized as possible
  - Examples
    - Do not install a dependency globally. Always try to keep it in the project's scope only, in order to not affect other parts of the computer
    - Do not set environment variables in the whole system. Always use localized environment variables, through the use of `.env` files
    - Use a runtime management system like `nvm` or `pipenv` to setup a specific python version only for the project. Do not depend on the runtime that is installed globally on the system
    - If possible, use Docker for development, to contain the whole OS configuration inside your project only
      - See VSCode's _Remote Containers_

- How do I know if I took my code cleaning to a level that might hurt the team?
  - Clean code is necessary to keep things easy. If things stop to be easy, why bother?

- Have in mind that soon our code will be maintained and augmented by AI. Your code should not need much context outside the file you are editing to be able to be understood and changed by AI.

- If something is wrong, it must fail as earlier as possible to be noticable. Error in the code? It must fail during compile time, before that code is delivered. Missing environment variables? It must fail and crash the process during the project startup, to avoid serving the app in an inconsistent state.
  - **fail fast principle**: A fail fast mentality is a mindset where individuals or organizations quickly identify failures, rather than letting them persist or be discovered later in a development process.

- Before a Pull Request
  - Always run the compiler before opening a Pull Request
  - Always run the linter before opening a Pull Request
  - Add seed data to the seed script so your colleagues can quickly test your feature
  - Take the necessary steps to make it easy for your colleagues to test and run your feature anytime in any environment.

- Be lazy and encourage your colleagues to be lazy too.
  - We want the project development to be as easy as possible, so it can be fun and refreshing to keep things going
  - We want to have the least work possible in the engineering side so we can focus more time on the business side of the product

- Prefer having a local environment, avoid shared environments. That allows for every team member to have their own local environment that they can play around with without consequences or affecting other colleagues work.
  - If a there is a remote service that does not offer a local / self-hosted instance:
    - use UUIDs in your data so that your data doesn't collide with other colleague's data in the  remote service
    - keep pointers in your local database instead of the remote service.
      - example: if you use a shared remote party blob storage, and you have a file that is associated to a database row
        - DO: link the file to the local database row by saving the blob ID from the blob storage into the database row. Keep as much information as possible in your local services and databases.
        - DO NOT: link the file to the database row by saving the database row ID in the blob storage. Avoid saving information that is unique to your local environment in the remote services.

- see something, say something
  - if you see something weird or that blocked your path, say it immediatly. Together we can keep a productive and simple architecture

- avoid catching exceptions. Exceptions can be both known and unknown scenarios. We want the unknown scenarios to bubble up to the top of the stack, so that they can be logged and stop the process from continuing
  - if you need to catch an error, it means you know about that specific scenario, so, in the sense of the word, it's no longer an exception, but an expected outcome. if you have to represent a function with multiple outcomes, prefer using _union types_
    - Example:
      ```typescript
      type Result =
        | { status: "ok"; data: unknown }
        | { status: "failed"; reason: string };
      ```
    - _union types_ are usually clearer to understand, since they don't require you to read all of the functions code to see what type of exceptions are thrown. They also provide more type-safety than exceptions

- code and systems must be as passive enough as possible. They should require the least maintenance and the least action as possible to achieve their objectives

- it's more probable that you will need to share technical logic than business logic
  - do share technical logic between features. This kind of logic is not unique to your business
    - Examples
      - Design tokens (colors, spaces, typography, etc...)
      - HTTP requests and authentication
      - Ways to obtain configuration values 
  - avoid having modules that share business logic between many features
  - business logic changes a lot more than technical logic, and requirements change differently for each feature
    - 2 features might be able to share use one module with shared business logic, but soon enough they this shared business logic will have to be copied over to each feature since requirements have changes