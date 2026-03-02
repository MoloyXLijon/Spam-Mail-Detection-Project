# Spam Detection Guide (Minimal)

This folder contains a minimal Python scaffold for the spam-detection backend used by the project README examples.

Quick start:

1. Create & activate a virtualenv in the repository root:

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
```

2. Install Python dependencies:

```powershell
python -m pip install --upgrade pip
pip install -r requirements.txt
```

3. Run the API:

```powershell
python -m uvicorn spam-detection-guide.api.app:app --reload --port 8000
```

4. Run a quick trainer example:

```powershell
python spam-detection-guide/src/training/trainer.py --model xgboost --dataset huggingface_sms
```

This scaffold is intentionally minimal — replace the placeholder trainer and predictor with your full implementations when available.
# 📧 Spam Mail Detection Project

A comprehensive, production-ready spam email detection system combining traditional machine learning, deep learning (BERT), and ensemble methods — with a FastAPI REST API, Docker deployment, and full evaluation pipeline.

---

## 📁 Project Structure

```
spam-detection-guide/
├── README.md                          ← Full research guide (datasets, architectures, metrics)
├── requirements.txt                   ← All Python dependencies
├── src/
│   ├── data_loader.py                 ← Multi-dataset loader (SpamAssassin, Enron, HuggingFace)
│   ├── feature_engineering.py         ← TextCleaner, TF-IDF, Statistical, URL, Header features
│   ├── models/
│   │   ├── traditional_ml.py          ← Naive Bayes, SVM, Logistic Regression, XGBoost, LightGBM
│   │   ├── bert_classifier.py         ← BERT/DistilBERT/RoBERTa fine-tuning with Focal Loss
│   │   └── ensemble.py                ← Stacking, Weighted Average, Hybrid BERT+ML ensembles
│   ├── training/
│   │   └── trainer.py                 ← End-to-end training pipeline with Optuna HPO
│   ├── evaluation/
│   │   └── metrics.py                 ← SpamEvaluator, threshold analysis, ROC/PR curves
│   └── inference/
│       └── predictor.py               ← SpamPredictor, BERTPredictor, EmailParser
├── api/
│   └── app.py                         ← FastAPI REST API (single, batch, raw email endpoints)
├── docker/
│   ├── Dockerfile                     ← Multi-stage production Docker image
│   └── docker-compose.yml             ← Full stack with Redis + Nginx profiles
├── notebooks/
│   └── exploration.ipynb              ← EDA, model comparison, threshold optimization
└── tests/
    └── test_pipeline.py               ← 40+ unit & integration tests
```

---

## 🔬 Research Coverage

### 📦 Datasets

| Dataset | Description |
|---------|-------------|
| **SpamAssassin** | Classic benchmark email dataset |
| **Enron** | ~500K real-world corporate emails |
| **TREC 2007** | Public spam track competition dataset |
| **SMS Spam Collection (UCI)** | 5,574 labeled SMS messages |
| **HuggingFace Datasets** | Various NLP-ready spam datasets |

---

### 🤖 Models Implemented

#### Traditional Machine Learning
| Model | Notes |
|-------|-------|
| Naive Bayes (Complement) | Fast baseline, great for text |
| SVM (LinearSVC + Platt calibration) | High precision, probability output |
| Logistic Regression | Interpretable, strong baseline |
| XGBoost | Gradient boosting, handles imbalance |
| LightGBM | Fast gradient boosting |
| Voting Ensemble | Combines all traditional models |

#### Deep Learning
| Model | Notes |
|-------|-------|
| **BERTSpamClassifier** | Custom classification head on BERT |
| DistilBERT | Lightweight BERT variant |
| RoBERTa | Robustly optimized BERT |
| **Focal Loss** | Handles class imbalance |
| Head-Tail Truncation | Handles long emails beyond 512 tokens |

#### Ensemble Methods
| Method | Notes |
|--------|-------|
| **StackingEnsemble** | Out-of-fold (OOF) meta-learner predictions |
| **HybridEnsemble** | BERT + XGBoost + statistical features |
| Weighted Average | Tunable model weight combination |

---

### 🛠️ Feature Engineering

| Extractor | Features |
|-----------|----------|
| **TextCleaner** | Lowercasing, stopword removal, stemming/lemmatization |
| **TFIDFFeatureExtractor** | Word n-grams + character n-grams |
| **StatisticalFeatureExtractor** | 23 features: caps ratio, punctuation density, word count, etc. |
| **URLFeatureExtractor** | URL count, suspicious domains, redirect detection |
| **EmailHeaderFeatureExtractor** | SPF/DKIM status, reply-to mismatch, routing anomalies |

---

### 📊 Evaluation Metrics

| Metric | Purpose |
|--------|---------|
| **FPR / FNR** | False Positive / Negative Rate (spam-specific emphasis) |
| **ROC-AUC** | Overall discrimination ability |
| **PR-AUC** | Precision-Recall for imbalanced data |
| **MCC** | Matthews Correlation Coefficient |
| **Brier Score** | Probability calibration quality |
| **Confusion Matrix** | Visual breakdown of predictions |

**Threshold Optimization Strategies:**
- F1-maximizing threshold
- Youden's J statistic
- FPR-constrained threshold (e.g., max 1% false positives)

---

## ⚡ Quick Start

### 1. Install Dependencies

```bash
pip install -r spam-detection-guide/requirements.txt
```

### 2. Train a Model

```bash
# Traditional ML (fastest)
python spam-detection-guide/src/training/trainer.py --model xgboost --dataset huggingface_sms

# BERT fine-tuning
python spam-detection-guide/src/training/trainer.py --model bert --epochs 3
```

### 3. Run the API

```bash
uvicorn spam-detection-guide/api/app:app --port 8000
```

### 4. Docker Deployment

```bash
docker-compose -f spam-detection-guide/docker/docker-compose.yml up
```

### 5. Run Tests

```bash
pytest spam-detection-guide/tests/ -v
```

---

## 🌐 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/predict` | POST | Single email prediction |
| `/predict/batch` | POST | Batch email predictions |
| `/predict/raw` | POST | Raw email string input |
| `/predict/email` | POST | Parsed `.eml` file input |

---

## 🐳 Docker Stack

- **Multi-stage Dockerfile** — optimized production image
- **Redis** — caching layer for repeated predictions
- **Nginx** — reverse proxy with rate limiting profiles
- **docker-compose** — one-command full stack deployment

---

## 🧪 Testing

40+ unit and integration tests covering:
- Data loading and preprocessing
- Feature extraction pipelines
- Model training and inference
- API endpoint validation
- Edge cases (empty emails, Unicode, long texts)

---

## 📈 Performance Targets

| Model | Accuracy | F1 | AUC |
|-------|----------|----|-----|
| Naive Bayes | ~97% | ~0.97 | ~0.99 |
| SVM | ~98% | ~0.98 | ~0.99 |
| XGBoost | ~98.5% | ~0.985 | ~0.999 |
| BERT | ~99%+ | ~0.99 | ~0.999 |
| Hybrid Ensemble | ~99.2%+ | ~0.992 | ~0.9995 |

---

## 🔧 Tech Stack

| Technology | Purpose |
|------------|---------|
| Python 3.9+ | Core language |
| scikit-learn | Traditional ML models |
| XGBoost / LightGBM | Gradient boosting |
| Transformers (HuggingFace) | BERT fine-tuning |
| PyTorch | Deep learning backend |
| FastAPI | REST API framework |
| Optuna | Hyperparameter optimization |
| Docker | Containerization |
| Redis | Prediction caching |
| Nginx | Reverse proxy |
| pytest | Testing framework |

---

## 📄 License

MIT License — free to use, modify, and distribute.
