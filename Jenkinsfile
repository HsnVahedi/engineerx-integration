pipeline {
    agent any
    parameters {
        string(name: 'CLUSTER_NAME', defaultValue: 'engineerx')
        string(name: 'REGION', defaultValue: 'us-east-2')
    }
    environment {
        REGION = "${params.REGION}"
        CLUSTER_NAME = "${params.CLUSTER_NAME}"
    }
    stages {
        stage('Build Cypress Microservice') {
            steps {
                script {
                    withDockerRegistry([ credentialsId: "dockerhub-repo", url: "" ]) {
                        def image = docker.build("hsndocker/integration-cypress:${env.BUILD_ID}")
                        image.push()
			            def pushedImage = docker.image("hsndocker/integration-cypress:${env.BUILD_ID}")
                        pushedImage.push("latest")

                    }
                }
            }
        }
        stage('Invoke Integration Test') {
            steps {
                build job: 'integration-test', parameters: [
                    string(name: "REGION", value: "${env.REGION}"),
                    string(name: "CLUSTER_NAME", value: "${env.CLUSTER_NAME}")
                ]
            }
        }
    }
}
