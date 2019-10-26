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
                ng build --prod
            }
        }

        stage('Test') {
            steps {
                echo 'Testing..'
                ng test
            }
        }

    }
}