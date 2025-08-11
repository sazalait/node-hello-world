pipeline {
  agent {
    label 'webserver'
  }
  environment {
    APP_DIR = '/var/www/html/node-hello-world' // Custom application directory
  }
  stages {
    stage('Checkout') {
      steps {
	checkout scm
      }
    }
  stage('Run Tests') {
      steps {
	script {
	 if (fileExists('package.json') || fileExists('package-lock.json')) {
            // Only run npm install if there are changes
            sh 'npm install'
          } else {
            echo 'No changes in package.json or package-lock.json. Skipping npm install.'
		sh 'npm test'
          }
      }
    }
}
    stage('Move Files to Project Directory') {
      steps {
        sh "rsync -avz --exclude '.git' /home/jenkins/workspace/react-app/ ${APP_DIR}/"
}
}
    stage('Build') {
      steps {
        dir(APP_DIR) {
           sh "pm2 restart my-app --cwd ${APP_DIR}"
        }
      }
    }
//   stage('Restart Application') {
//	  steps {
//        script {
//          sh "pm2 restart reac-app --cwd ${APP_DIR}"
//        }
//      }
//    }
  }
}

