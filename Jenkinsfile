pipeline {
  agent any
  stages {
    stage('Install Packages') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build Angular') {
      steps {
        sh 'npm run build-production'
      }
    }
    stage('Deploy') {
      steps {
        sshPublisher(alwaysPublishFromMaster: true)
      }
    }
  }
  tools {
    nodejs 'node'
  }
}