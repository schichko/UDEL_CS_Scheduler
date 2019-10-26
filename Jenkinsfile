pipeline {
  agent any
 
  tools {
    nodejs "node"
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