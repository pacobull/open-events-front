pipeline {
    agent { docker { image 'node:12.14.1' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
