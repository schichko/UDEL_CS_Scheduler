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
          masterNodeName: '',
          paramPublish: null,
          publishers: [
            sshPublisherDesc(
              configName: 'live-server', 
              transfers: [
                sshTransfer(
                  excludes: '', 
                  flatten: false, 
                  cleanRemote: true,
                  makeEmptyDirs: true, 
                  noDefaultExcludes: true, 
                  patternSeparator: '[, ]+',  
                  remoteDirectorySDF: false, 
                  removePrefix: '', 
                  sourceFiles: 'dist/planner/**')
                  ], 
                usePromotionTimestamp: false, 
                useWorkspaceInPromotion: false, 
                verbose: true,
                removePrefix: 'dist/planner'
                )])
      }
    }
  }
  tools {
    nodejs 'node'
  }
}