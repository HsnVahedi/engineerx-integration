<p align="center">

  <h3 align="center">EngineerX Integration Test Microservice</h3>

  <p align="center">
    <a href="https://github.com/HsnVahedi/engineerx-integration/issues/new">Report bug</a>
    ·
    <a href="https://github.com/HsnVahedi/engineerx-integration/issues/new">Request feature</a>
  </p>
</p>


## Table of contents

- [Introduction to EngineerX project](#introduction-to-engineerx-project)
- [What does Integration Test mean](#what-does-integration-test-mean)
- [Run this project](#run-this-project)
- [EngineerX code repositories](#engineerx-code-repositories)





## Introduction to EngineerX project

EngineerX is an open source web application designed for engineers and specialists. It lets them share their ideas, create tutorials, represent themselves, employ other specialists and ...

Currently, The project is at it's first steps and includes a simple but awesome [Content Management System (CMS)](https://en.wikipedia.org/wiki/Content_management_system) that lets content providers to create and manage blog posts.

Key features of the project:

- It's [cloud native](https://en.wikipedia.org/wiki/Cloud_native_computing) and can easily get deployed on popular cloud providers like (AWS, Azure and ...)
- It benefits from microservices architectural best practices. It uses technologies like [docker](https://www.docker.com/) and [kubernetes](https://kubernetes.io/) to provide a horizontally scalable infrastructure with high availability.
- It includes a wide range of popular development frameworks and libraries like: [django](https://www.djangoproject.com/), [reactjs](https://reactjs.org/), [nextjs](https://nextjs.org/), [wagtail](https://wagtail.io/) and ...
- It benefits from [TDD](https://en.wikipedia.org/wiki/Test-driven_development) best practices and uses [unittest](https://docs.python.org/3/library/unittest.html#module-unittest), [jest](https://jestjs.io/), [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) and [cypress](https://www.cypress.io/) for different kinds of tests.
- It uses [Jenkins](https://www.jenkins.io/) declarative pipeline syntax to implement [CI/CD](https://en.wikipedia.org/wiki/CI/CD) pipelines. (Pipeline as code)
- Developers are able to write different kinds of tests and run them in a parallelized and non-blocking manner. In other words, testing environment is also elastic and scalable.
- It uses [Terraform](https://www.terraform.io/) to provision the required cloud infrastructure so it's really easy to deploy the whole project and destroy it whenever it's not needed any more. (Infrastructure as code)
- It's built on top of wagtail. Wagtail enables django developers to have a professional headless CMS which can be customized for many types of businesses.




## What does Integration Test mean
In testing terminology, phrases like `unit tests` and `integration tests` could mean different things in different contexts. In this project, `integration tests` means tests that include both [backend](https://github.com/HsnVahedi/engineerx-backend) and [frontend](https://github.com/HsnVahedi/engineerx-frontend) microservices.

## Run this project

#### 1. Clone this repository:
    git clone https://github.com/HsnVahedi/engineerx-integration
#### 2. Pull required docker images:
    cd engineerx-integration/
    docker-compose pull
#### 3. Start EngineerX server:
    docker-compose up
#### 4. Initialize database with randomly generated objects:
Open another terminal and run this command:

    docker-compose exec backend python manage.py initdb
#### 5. Create a super user:

    docker-compose exec backend python manage.py createsuperuser
#### 6. Open Cypress
Now the application server is up and running on `http://127.0.0.1:3000`. Administration pages are accessiblle on `http://127.0.0.1:8000/admin`.

We have to install and open cypress:
    
    npm install
    npx cypress open --config-file cypress.dev.json


## EngineerX code repositories

EngineerX is a big project and consists of several code bases:

- [engineerx-aws-cli](https://github.com/HsnVahedi/engineerx-aws-cli)
- [engineerx-aws-infrastructure](https://github.com/HsnVahedi/engineerx-aws-infrastructure)
- [engineerx-aws-deployment](https://github.com/HsnVahedi/engineerx-aws-deployment)
- [engineerx-backend](https://github.com/HsnVahedi/engineerx-backend)
- [engineerx-frontend](https://github.com/HsnVahedi/engineerx-frontend)
- [engineerx-integration](https://github.com/HsnVahedi/engineerx-integration)
- [engineerx-backend-unittest](https://github.com/HsnVahedi/engineerx-backend-unittest)
- [engineerx-frontend-unittest](https://github.com/HsnVahedi/engineerx-frontend-unittest)
- [engineerx-integration-test](https://github.com/HsnVahedi/engineerx-integration-test)
- [engineerx-efs-pv](https://github.com/HsnVahedi/engineerx-efs-pv)
- [engineerx-efs-pvc](https://github.com/HsnVahedi/engineerx-efs-pvc)
- [engineerx-backend-latest-tag](https://github.com/HsnVahedi/engineerx-backend-latest-tag)
- [engineerx-frontend-latest-tag](https://github.com/HsnVahedi/engineerx-frontend-latest-tag)
