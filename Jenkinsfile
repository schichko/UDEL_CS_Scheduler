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
                sh 'npm install'
                sh 'ng build --prod'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'ng test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'curl --insecure --user ${env.USERNAME}:${env.PASSWORD} -T ./dist/* sftp://${env.DESTHOST}${env.PATH}/'
            }
        }

    }
}