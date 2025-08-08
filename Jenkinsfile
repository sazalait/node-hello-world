pipeline {
  agent {
    label 'webserver'
//    customWorkspace '/var/www/html/react-app'
  }
  environment {
    APP_DIR = '/var/www/html/node-hello-world' // Custom application directory
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
        //  sh 'npm install'
    //      sh 'npm run build'
	//   sh 'docker compose up -d'	
        //   sh 'pm2 restart my-app'
             sh 'whoami'
             sh 'docker build -t my-react-app .'
             sh 'docker run -d -p 8081:8080 --name my-react-container my-react-app'
        }
      }
    }
  }
}

