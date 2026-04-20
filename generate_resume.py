#!/usr/bin/env python3
"""Generate ATS-compatible PDF resume for Somesh Fengade"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.lib.colors import HexColor

def create_resume():
    doc = SimpleDocTemplate(
        "/workspace/portfolio/Somesh_Fengade_Resume.pdf",
        pagesize=letter,
        rightMargin=0.6*inch,
        leftMargin=0.6*inch,
        topMargin=0.5*inch,
        bottomMargin=0.5*inch
    )
    
    styles = getSampleStyleSheet()
    
    # Custom styles for ATS compatibility (simple, clean formatting)
    name_style = ParagraphStyle(
        'Name',
        parent=styles['Heading1'],
        fontSize=18,
        alignment=TA_CENTER,
        spaceAfter=4,
        textColor=HexColor('#000000'),
        fontName='Helvetica-Bold'
    )
    
    contact_style = ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontSize=10,
        alignment=TA_CENTER,
        spaceAfter=12,
        textColor=HexColor('#333333'),
        fontName='Helvetica'
    )
    
    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Heading2'],
        fontSize=12,
        spaceBefore=12,
        spaceAfter=6,
        textColor=HexColor('#000000'),
        fontName='Helvetica-Bold',
        borderWidth=0,
        borderPadding=0,
        borderColor=HexColor('#000000'),
    )
    
    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontSize=11,
        spaceBefore=6,
        spaceAfter=2,
        fontName='Helvetica-Bold',
        textColor=HexColor('#000000')
    )
    
    job_details_style = ParagraphStyle(
        'JobDetails',
        parent=styles['Normal'],
        fontSize=10,
        spaceAfter=4,
        fontName='Helvetica-Oblique',
        textColor=HexColor('#444444')
    )
    
    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontSize=10,
        spaceAfter=2,
        fontName='Helvetica',
        textColor=HexColor('#000000'),
        alignment=TA_JUSTIFY,
        leading=13
    )
    
    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontSize=10,
        leftIndent=15,
        spaceAfter=3,
        fontName='Helvetica',
        textColor=HexColor('#000000'),
        leading=13
    )
    
    skills_style = ParagraphStyle(
        'Skills',
        parent=styles['Normal'],
        fontSize=10,
        spaceAfter=4,
        fontName='Helvetica',
        textColor=HexColor('#000000'),
        leading=13
    )
    
    story = []
    
    # === HEADER ===
    story.append(Paragraph("SOMESH FENGADE", name_style))
    story.append(Paragraph(
        "Mumbai / Pune, India | someshfengde@gmail.com<br/>"
        '<link href="https://linkedin.com/in/somesh-9188">linkedin.com/in/somesh-9188</link> | '
        '<link href="https://github.com/someshfengde">github.com/someshfengde</link> | '
        '<link href="https://huggingface.co/Someshfengde">huggingface.co/Someshfengde</link>',
        contact_style
    ))
    
    # === PROFESSIONAL SUMMARY ===
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    story.append(Paragraph(
        "Machine Learning Engineer with 3+ years of experience specializing in Generative AI, "
        "RAG pipelines, and agentic systems. Expertise in building production-grade ML services "
        "with FastAPI, LLM tooling, and modern vector databases. Proficient in end-to-end ML "
        "lifecycle including model development, deployment, and observability. Strong background "
        "in computer vision, NLP, and data infrastructure.",
        body_style
    ))
    
    # === EXPERIENCE ===
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading))
    
    # Job 1 - Culinda
    story.append(Paragraph("Machine Learning Engineer", job_title_style))
    story.append(Paragraph("Culinda Inc — Hyderabad, India | November 2022 – Present", job_details_style))
    
    culinda_bullets = [
        "Built a scalable RAG-enabled agentic chatbot for dynamic Q&A across dashboard elements, improving user engagement and reducing support tickets",
        "Integrated agentic frameworks and LLMs for cybersecurity decision support, enabling automated threat analysis and response recommendations",
        "Core contributor to Culinda's flagship SaaS products CARM and Darkeye; shipped custom features, resolved production issues, and mentored interns",
        "Designed and developed Dark Watch, a threat remediation module that automates security vulnerability identification and remediation workflows",
        "Implemented observability pipelines using LangFuse for monitoring LLM performance and debugging RAG systems in production"
    ]
    
    for bullet in culinda_bullets:
        story.append(Paragraph(f"• {bullet}", bullet_style))
    
    # Job 2 - Indio Networks
    story.append(Paragraph("Data Visualization Intern", job_title_style))
    story.append(Paragraph("Indio Networks — Pune, India | April 2022 – July 2022", job_details_style))
    
    indio_bullets = [
        "Built interactive Plotly dashboards for real-time monitoring of connected IoT devices and network traffic",
        "Developed FastAPI backend services integrated with Dash for data visualization and analytics",
        "Maintained and enhanced predictive models for network anomaly detection"
    ]
    
    for bullet in indio_bullets:
        story.append(Paragraph(f"• {bullet}", bullet_style))
    
    # === PROJECTS ===
    story.append(Paragraph("KEY PROJECTS", section_heading))
    
    story.append(Paragraph("<b>Darkwatch — AI Risk Remediation System</b>", body_style))
    story.append(Paragraph(
        "• Built enterprise RAG pipeline using Python, FastAPI, Weaviate/Qdrant, LlamaIndex, and OpenAI for automated security threat remediation",
        bullet_style
    ))
    story.append(Paragraph(
        "• Implemented document ingestion, vector storage, and LLM-guided remediation with LangFuse observability and Docker deployment",
        bullet_style
    ))
    
    story.append(Spacer(1, 4))
    story.append(Paragraph("<b>NightHawk — Conversational Database Intelligence</b>", body_style))
    story.append(Paragraph(
        "• Developed natural language analytics platform using PostgreSQL, OpenAI Agents SDK with dynamic routing between MongoDB and SQL backends",
        bullet_style
    ))
    story.append(Paragraph(
        "• Implemented streaming responses with inline visualizations for real-time data exploration",
        bullet_style
    ))
    
    story.append(Spacer(1, 4))
    story.append(Paragraph("<b>Academic RAG Chatbot</b>", body_style))
    story.append(Paragraph(
        "• Created voice + text academic assistant using React, FastAPI, LlamaIndex, Llama-3.2-70B, and Cohere embeddings for university Q&A",
        bullet_style
    ))
    
    # === SKILLS ===
    story.append(Paragraph("TECHNICAL SKILLS", section_heading))
    
    story.append(Paragraph(
        "<b>Languages:</b> Python, SQL",
        skills_style
    ))
    story.append(Paragraph(
        "<b>ML/AI:</b> PyTorch, Deep Learning, Generative AI, RAG Systems, LLM Fine-tuning, Computer Vision, NLP",
        skills_style
    ))
    story.append(Paragraph(
        "<b>Frameworks:</b> FastAPI, Flask, LlamaIndex, LangChain, OpenAI SDK, Streamlit, Gradio",
        skills_style
    ))
    story.append(Paragraph(
        "<b>Databases:</b> PostgreSQL, MySQL, MongoDB, Supabase, Weaviate, Qdrant (Vector DBs)",
        skills_style
    ))
    story.append(Paragraph(
        "<b>Tools & Infrastructure:</b> Docker, Git, GitHub/GitLab, Jira, LangFuse, Weights & Biases",
        skills_style
    ))
    story.append(Paragraph(
        "<b>Data Visualization:</b> Plotly, Dash, Pandas, NumPy",
        skills_style
    ))
    
    # === EDUCATION ===
    story.append(Paragraph("EDUCATION", section_heading))
    story.append(Paragraph("<b>Bachelor of Engineering in Computer Science</b>", body_style))
    story.append(Paragraph("University of Mumbai | 2019 – 2023 | CGPA: 8.89/10", job_details_style))
    
    # === CERTIFICATIONS ===
    story.append(Paragraph("CERTIFICATIONS", section_heading))
    cert_bullets = [
        "AWS Certified Machine Learning – Specialty",
        "AWS Machine Learning Nanodegree",
        "Oxford Machine Learning Summer School (Graduate)",
        "AI Agents Fundamentals"
    ]
    for cert in cert_bullets:
        story.append(Paragraph(f"• {cert}", bullet_style))
    
    # === ACHIEVEMENTS ===
    story.append(Paragraph("ACHIEVEMENTS & COMMUNITY", section_heading))
    achievements = [
        "Featured Speaker: Kaggle Experts – Notebooks & Discussion Workshop (April 2023)",
        "Top Community Contributor: Plotly Community Forum (October 2022)",
        "Active Hackathon Participant: Multiple AI hackathon awards via LabLab.ai",
        "Open Source: 100+ GitHub followers, 77+ stars across 108 repositories",
        "Published Models: Hugging Face models for text classification including fine-tuned DistilBERT"
    ]
    for achievement in achievements:
        story.append(Paragraph(f"• {achievement}", bullet_style))
    
    # Build PDF
    doc.build(story)
    print("Resume generated: /workspace/portfolio/Somesh_Fengade_Resume.pdf")

if __name__ == "__main__":
    create_resume()
