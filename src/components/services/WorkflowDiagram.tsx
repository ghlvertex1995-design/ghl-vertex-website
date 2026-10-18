import styles from "./WorkflowDiagram.module.css";

export interface WorkflowNode {
  phase: string;
  title: string;
  description: string;
  technicalDetails: string;
}

interface WorkflowDiagramProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  nodes: WorkflowNode[];
}

export function WorkflowDiagram({
  eyebrow = "Architecture & Execution Flow",
  heading,
  subtitle,
  nodes,
}: WorkflowDiagramProps) {
  return (
    <section className={styles.section} aria-labelledby="workflow-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="workflow-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.diagramWrapper}>
          <div className={styles.timeline}>
            {nodes.map((node, idx) => (
              <div key={idx} className={styles.nodeItem}>
                <div className={styles.nodeIndicator}>
                  <div className={styles.nodeIndex}>{idx + 1}</div>
                  {idx < nodes.length - 1 && <div className={styles.lineConnector} />}
                </div>

                <div className={styles.nodeContent}>
                  <span className={styles.phaseTag}>{node.phase}</span>
                  <h3 className={styles.nodeTitle}>{node.title}</h3>
                  <p className={styles.nodeDesc}>{node.description}</p>
                  <div className={styles.nodeTech}>
                    <span className={styles.techLabel}>Tech Stack &amp; Protocol:</span>
                    <span className={styles.techVal}>{node.technicalDetails}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
