import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProductHunt, faAws, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Product Strategy",
    "Roadmap",
    "PRDs and Requirements",
    "KPI Design",
    "Cross-Functional Execution",
  ];  

  const labelsSecond = [
    "AWS",
    "Serverless Architecture",
    "Data Pipelines",
    "Observability",
    "CI/CD Automation",
  ];  

  const labelsThird = [
    "Model Evaluation",
    "A/B Testing",
    "LLMs",
    "Prompt Engineering",
    "Testing",
  ];  

function Expertise() {
    return (
    <div id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faProductHunt} size="3x"/>
                    <h3>Product Management</h3>
                    <p>I lead multiple AI products end to end, owning strategy, requirements, metrics, and execution across complex, regulated domains. Experience shipping Voice AI, analytics, and automation with measurable impact.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Focus Areas:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Cloud</h3>
                    <p>I design and deliver cloud systems focused on reliability, speed, and operational outcomes. Background in data ingestion, incident intelligence, and automation across production environments. AWS SAA-C03.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Focus Areas:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Applied AI</h3>
                    <p>I build and iterate on applied AI systems with emphasis on evaluation, adoption, and real-world performance. Experience deploying LLM-enabled workflows that support data-driven decisions. AWS MLA-C01.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Focus Areas:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;