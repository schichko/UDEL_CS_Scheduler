pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        USERNAME = credentials('desthost-user')
        PASSWORD = credentials('desthost-password')
        DESTHOST = credentials('desthost')
        PATH = credentials('deploy-path')
    }

    stages {

        stage('Build') {
            steps {
                echo 'Building..'
                npm install
                npm build-production
            }
        }

        stage('Test') {
            steps {
                echo 'Testing..'
                npm test
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }

    }
}