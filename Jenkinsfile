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
        sshPublisher(
          publishers: [
            sshPublisherDesc(
              configName: 'live-server', 
              transfers: [
                sshTransfer(
                  excludes: '', 
                  execCommand: '', 
                  execTimeout: 120000, 
                  flatten: false, 
                  makeEmptyDirs: false, 
                  noDefaultExcludes: false, 
                  patternSeparator: '[, ]+', 
                  remoteDirectory: '/var/www/html/secure/planner/', 
                  remoteDirectorySDF: false, 
                  removePrefix: '', 
                  sourceFiles: '/dist/planner/*')
                  ], 
                usePromotionTimestamp: false, 
                useWorkspaceInPromotion: false, 
                verbose: true)
                ]
                )
      }
    }
  }
  tools {
    nodejs 'node'
  }
}