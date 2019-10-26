pipeline {
  agent any
 
  tools {
    nodejs "node"
  }

  environment {
    USERNAME = credentials('desthost-user')
    PASSWORD = credentials('desthost-password')
    DESTHOST = credentials('desthost')
    PATH = credentials('deploy-path')
  }
 
  stages {
    stage('Install Node Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build Angular Project') {
      steps {
        sh 'npm run build-production'
      }
    }
  }
}