pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        USERNAME     = credentials('desthost-user')
        PASSWORD = credentials('desthost-password')
        DESTHOST = credentials('desthost')
        PATH = credentials('deploy-path')
    }

    stages {

        stage('Build') {
            steps {
                echo 'Building..'
                bash 'npm install'
                bash 'ng build --prod'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing..'
                bash 'ng test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
                bash 'curl --insecure --user ${env.USERNAME}:${env.PASSWORD} -T ./dist/* sftp://${env.DESTHOST}${env.PATH}/'
            }
        }

    }
}