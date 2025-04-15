# SIT323-2025-Prac6P: Kubernetes Deployment of a Containerized Microservice

## Overview

This project includes the files and setup I used to deploy my Node.js microservice to a Kubernetes cluster. The image was built and pushed to Google Container Registry in Task 5.2D. In this task, I used Kubernetes to deploy the container, created a service to expose it, and used a secret to allow Kubernetes to pull the image securely.

## Prerequisites

- Docker and Docker Compose installed
- A Kubernetes cluster (e.g. Docker Desktop with Kubernetes enabled, or Minikube)
- `kubectl` installed and connected to your cluster
- Google Cloud project with Container Registry enabled
- A built image pushed to: `gcr.io/cloud-native-microservice/task5:latest`
- A service account JSON key with permission to pull from the registry (e.g. Artifact Registry Reader)

## Files Included

- `index.js`: Node.js microservice
- `Dockerfile`: Docker build config
- `deployment.yaml`: Kubernetes deployment file
- `service.yaml`: Kubernetes service file
- `README.md`: This guide

## Steps to Deploy

### 1. Create a Service Account Key

In the Google Cloud Console:

- Go to **IAM & Admin > Service Accounts**
- Create a new service account (e.g. `artifact-puller`)
- Grant it the role `Artifact Registry Reader` or `Storage Object Viewer`
- Go to the **Keys** tab and create a new key (choose JSON)
- Save the key file locally

### 2. Create the Image Pull Secret

Use the downloaded JSON key to allow Kubernetes to pull the private image:

```bash
kubectl create secret docker-registry regcred \
  --docker-server=gcr.io \
  --docker-username=_json_key \
  --docker-password="$(cat C:/Users/HopeR/Downloads/cloud-native-microservice-e51e3465c16d.json)" \
  --docker-email=dockerkubernetes@cloud-native-microservice.iam.gserviceaccount.co
```

3. Deploy the Application
   Run the following to apply the Kubernetes deployment and service:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

4. Access the Application
   Check if the pods are running:

```bash
kubectl get pods
```

Then either:

Open in browser at http://localhost:30001 (if using NodePort)

Or use port forwarding:

```bash
kubectl port-forward service/my-microservice-service 3000:3000
Visit: http://localhost:3000
```

Troubleshooting
If the pods aren’t starting or the image isn’t pulling:

```bash
kubectl describe pod <pod-name>
kubectl logs <pod-name>
```
