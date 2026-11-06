"""Builds public/PhilipsNguyenResume.pdf as an ATS-friendly resume.

ATS-friendly choices: single column, no tables/images/text boxes, standard
section headings, a real text layer in reading order, standard fonts, plain
bullets, and dates in "Month YYYY - Month YYYY" form.

Usage:  py -3 scripts/build_resume.py
Needs:  pip install reportlab
"""
from pathlib import Path

from reportlab.lib.colors import HexColor, black
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer

OUT = Path(__file__).resolve().parent.parent / "public" / "PhilipsNguyenResume.pdf"

NAME = "Philips Huy Nguyen"
HEADLINE = "Senior Backend Software Engineer"
CONTACT = [
    "Atlanta, GA",
    "(414) 364-2335",
    '<link href="mailto:philips.nguyen96@gmail.com">philips.nguyen96@gmail.com</link>',
    '<link href="https://www.philipsnguyen.com">philipsnguyen.com</link>',
    '<link href="https://www.linkedin.com/in/philips-nguyen">linkedin.com/in/philips-nguyen</link>',
]

SUMMARY = (
    "Senior backend software engineer with 8+ years of experience designing, building, and operating "
    "distributed, cloud-native systems in the financial services and retail industries. Expertise in Java "
    "(Spring Boot), C# and .NET, REST and gRPC API design, event-driven systems with Kafka, and Google Cloud "
    "Platform. Track record of shipping scalable APIs, owning production reliability through on-call "
    "support, observability, and resiliency engineering, and mentoring engineers on Agile Scrum teams."
)

SKILLS = [
    ("Languages", "Java, C#, SQL, TypeScript, JavaScript, YAML"),
    ("Backend &amp; APIs", "Spring Boot, .NET Core, REST, gRPC, OpenAPI, Microservices, Event-Driven Architecture, Distributed Systems"),
    ("Frontend", "React, Next.js, AngularJS"),
    ("Cloud", "Google Cloud Platform (GKE, Pub/Sub, Cloud Run, Cloud Storage), Azure (App Services, AD B2C, Pipelines)"),
    ("Messaging &amp; Data", "Kafka, MongoDB, SQL Server, Redis"),
    ("DevOps &amp; IaC", "Docker, Kubernetes, Helm, Terraform, CI/CD, Jenkins, GitLab CI, GitHub Actions, Azure Pipelines"),
    ("Observability &amp; Quality", "DataDog, Grafana, Prometheus, ELK Stack, SonarQube, Unit Testing"),
    ("Practices", "Agile/Scrum, Performance Optimization, Monitoring and Alerting, Resiliency Engineering, Root Cause Analysis, Incident Response, On-Call Support, Mentoring"),
]

EXPERIENCE = [
    {
        "title": "Software Engineer",
        "org": "Zebra Technologies",
        "place": "Chicago, IL",
        "dates": "July 2021 – Present",
        "bullets": [
            "Design and deliver 9+ highly scalable Java Spring Boot gRPC APIs for a cloud-based, distributed SaaS "
            "product on Google Cloud Platform, using Kafka and MongoDB, as part of a Scrum team.",
            "Serve as on-call support engineer accountable for production stability; build resiliency plans and "
            "improve recovery operations for mission-critical services to maintain high availability.",
            "Automate complex system processes with monitoring and alerting (DataDog, Grafana) and resolve "
            "availability and performance issues to meet 100% of non-functional requirements; enforce code quality "
            "with SonarQube.",
            "Partner with 4+ external integration and testing teams, providing technical consulting and advising to "
            "support delivery initiatives.",
        ],
    },
    {
        "title": "Software Engineer",
        "org": "Northwestern Mutual",
        "place": "Milwaukee, WI",
        "dates": "May 2016 – July 2021",
        "bullets": [
            "Designed and documented scalable REST APIs for CRUD operations on SQL databases, handling "
            "100,000+ requests per day for 5+ applications.",
            "Implemented features and bug fixes in Java services processing 5,000,000+ sensitive customer records.",
            "Application owner for a suite of .NET applications with 5,000+ users; ensured stability, security, "
            "and code quality.",
            "Enforced CI/CD patterns for 10+ applications across 10+ teams; maintained repositories and "
            "environments for 100+ developers and testers.",
            "Built proactive monitoring solutions by parsing 1,000+ application and user log files to generate "
            "predictive metrics.",
            "Wrote automated unit tests to reach 80% coverage and resolved 100% of critical SonarQube issues.",
        ],
    },
    {
        "title": "Volunteer Backend IT Lead",
        "org": "Vietnamese Eucharistic Youth Movement (VEYM)",
        "place": "Anaheim, CA",
        "dates": "October 2019 – Present",
        "bullets": [
            "Lead regional technology decisions and initiatives, managing a team of 10+ teammates.",
            "Design and implement software solutions for a worldwide non-profit organization.",
            "Manage the backlog and partner with stakeholders to define IT needs, advocating for user-centered design.",
        ],
    },
]

PROJECTS = [
    {
        "name": "VEYM Membership Platform",
        "url": "https://members.veym.net",
        "stack": "Next.js, .NET Core, SQL, Azure",
        "bullets": [
            "Lead engineer for an HR membership and directory system serving 6,000+ members on Azure App Services; "
            "own architecture, system design, API implementation, CI/CD, Azure AD B2C integration, and support.",
            "Secured the REST API with Active Directory group authorization, automated deployments with Azure "
            "Pipelines, and built robust logging; authored architecture diagrams and user guides, and mentor interns.",
        ],
    },
]

EDUCATION = {
    "degree": "Bachelor of Science (B.S.), Computer Science",
    "school": "University of Wisconsin–Milwaukee",
    "place": "Milwaukee, WI",
}

# ---- styles -------------------------------------------------------------
FONT, BOLD, ITALIC = "Helvetica", "Helvetica-Bold", "Helvetica-Oblique"
ACCENT = HexColor("#1f3a5f")

s_name = ParagraphStyle("name", fontName=BOLD, fontSize=20, leading=24, alignment=TA_LEFT)
s_head = ParagraphStyle("headline", fontName=FONT, fontSize=12, leading=15, textColor=ACCENT)
s_contact = ParagraphStyle("contact", fontName=FONT, fontSize=9, leading=12)
s_section = ParagraphStyle("section", fontName=BOLD, fontSize=10.5, leading=13, textColor=ACCENT, spaceBefore=6, spaceAfter=1)
s_body = ParagraphStyle("body", fontName=FONT, fontSize=9, leading=11.5)
s_org = ParagraphStyle("org", fontName=BOLD, fontSize=9.5, leading=12, spaceBefore=4)
s_role = ParagraphStyle("role", fontName=ITALIC, fontSize=9, leading=11.5)
s_bullet = ParagraphStyle("bullet", fontName=FONT, fontSize=9, leading=11.3, leftIndent=11, bulletIndent=1, spaceBefore=0.8)
s_skill = ParagraphStyle("skill", fontName=FONT, fontSize=9, leading=11.3, spaceBefore=1)


def section(title):
    return [Paragraph(title, s_section), HRFlowable(width="100%", thickness=0.7, color=ACCENT, spaceAfter=3)]


def bullets(items):
    return [Paragraph(b, s_bullet, bulletText="•") for b in items]


def build():
    story = [
        Paragraph(NAME, s_name),
        Paragraph(HEADLINE, s_head),
        Spacer(1, 3),
        Paragraph(" | ".join(CONTACT), s_contact),
    ]

    story += section("SUMMARY")
    story.append(Paragraph(SUMMARY, s_body))

    story += section("TECHNICAL SKILLS")
    for label, value in SKILLS:
        story.append(Paragraph(f"<b>{label}:</b> {value}", s_skill))

    story += section("PROFESSIONAL EXPERIENCE")
    for job in EXPERIENCE:
        block = [
            Paragraph(f"{job['org']} | {job['place']}", s_org),
            Paragraph(f"{job['title']} | {job['dates']}", s_role),
        ]
        block += bullets(job["bullets"])
        # Keep the heading lines together with the first bullet.
        story += [KeepTogether(block[:3])] + block[3:]

    story += section("PROJECTS")
    for p in PROJECTS:
        link = f'<link href="{p["url"]}">{p["url"].replace("https://", "").replace("www.", "")}</link>'
        block = [Paragraph(f"{p['name']} | {p['stack']} | {link}", s_org)]
        block += bullets(p["bullets"])
        story += [KeepTogether(block[:2])] + block[2:]

    story += section("EDUCATION")
    story.append(Paragraph(f"{EDUCATION['school']} | {EDUCATION['place']}", s_org))
    story.append(Paragraph(EDUCATION["degree"], s_role))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=LETTER,
        leftMargin=0.55 * inch,
        rightMargin=0.55 * inch,
        topMargin=0.45 * inch,
        bottomMargin=0.45 * inch,
        title="Philips Nguyen - Senior Backend Software Engineer Resume",
        author="Philips Nguyen",
        subject="Resume",
        keywords="Backend Engineer, Java, Spring Boot, gRPC, Kafka, Google Cloud Platform, .NET, Microservices",
    )
    doc.build(story)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    build()
