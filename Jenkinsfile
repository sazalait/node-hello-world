pipeline {
  agent {
    label 'webserver'
//    customWorkspace '/var/www/html/react-app'
  }
  environment {
    APP_DIR = '/var/www/html/multi-react-app_fix-123' // Custom application directory
    IMAGE_NAME = "my-react-app"
    IMAGE_VERSION = "${env.BUILD_NUMBER}" // Jenkins build number as version
  }
  stages {
    stage('Checkout') {
      steps {
 //       git url: 'https://github.com/your-username/your-nodejs-app.git', branch: 'main', credentialsId: 'correct-git-credentials-id'
	checkout scm
      }
    }
  stage('Run Tests') {
      steps {
	script {
            // Only run npm install if there are changes
            sh 'npm install'
//	    sh 'npm test'
          }
      }
    }
    stage('Move Files to Project Directory') {
      steps {
        sh "rsync -avz --exclude '.git' /home/jenkins/workspace/multi-react-app_fix-123/ ${APP_DIR}/"
}
}
   stage('Build') {
      steps {
         dir(APP_DIR) {
            script {
                // You can keep your commented commands for later
                // sh 'npm install'
                // sh 'npm run build'
                // sh 'docker compose up -d'
                // sh 'pm2 restart my-app'
                // sh 'whoami'

                def tag = "${IMAGE_NAME}:${IMAGE_VERSION}"
                sh "echo 'Building image: ${tag}'"
                sh "docker build -t ${tag} ."
                sh "docker run -d -p 8081:8080 --name my-react-container ${tag}"
            }
        }
    }
}
  }
}

