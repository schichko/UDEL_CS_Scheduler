pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                ng build --prod
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                ng test
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                curl --insecure --user ${env.USERNAME}:${env.PASSWORD} -T ./dist/* sftp://${env.DESTHOST}/${env.PATH}/
            }
        }
    }
}