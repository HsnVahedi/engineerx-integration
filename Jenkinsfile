pipeline {
    agent any
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
    }
}
