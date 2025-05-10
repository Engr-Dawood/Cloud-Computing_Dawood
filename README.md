# Create README.md
cat > README.md << 'EOL'
# Cloud Computing Microservices Project

This repository demonstrates the transformation of a monolithic application into a microservices architecture deployed on Amazon ECS.

## Project Structure

The project contains three microservices:
- **Frontend Service**: Handles the user interface
- **Backend Service**: Processes business logic
- **Database Service**: Manages data storage and retrieval

## Deployment

This project uses AWS ECS for container orchestration, with infrastructure defined as code using Terraform.

## How to Run

Follow the instructions in each service directory to build and deploy the microservices.
EOL
