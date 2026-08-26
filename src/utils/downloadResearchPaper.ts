import { jsPDF } from "jspdf";
import { ScientificEvidenceItem } from "@/data/scientificEvidenceData";

/**
 * Generates and downloads a multi-page PDF research whitepaper
 * for any given scientific evidence item.
 */
export function downloadResearchPaper(item: ScientificEvidenceItem) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;

  const checkPageBreak = (spaceNeeded: number) => {
    if (y + spaceNeeded > pageHeight - 20) {
      doc.addPage();
      y = 20;
      drawHeader(true);
    }
  };

  const drawHeader = (isContinuation = false) => {
    // Top Accent Bar
    doc.setFillColor(234, 52, 132); // #EA3484
    doc.rect(margin, 10, contentWidth, 2, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(23, 37, 84); // #172554
    doc.text("ASTROBABY™ CLINICAL RESEARCH COUNCIL", margin, 16);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(`ID: AB-RES-${item.id.toUpperCase()}-${item.publishedYear}`, pageWidth - margin, 16, {
      align: "right",
    });

    doc.setDrawColor(226, 232, 240);
    doc.line(margin, 18, pageWidth - margin, 18);
    y = 24;
  };

  // Draw initial header
  drawHeader(false);

  // Category & Badge Tag
  doc.setFillColor(253, 242, 248);
  doc.setDrawColor(251, 207, 232);
  doc.roundedRect(margin, y, 60, 6, 2, 2, "FD");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(190, 24, 93);
  doc.text(`${item.badge.toUpperCase()} • ${item.category.toUpperCase()}`, margin + 30, y + 4.2, {
    align: "center",
  });
  y += 10;

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.setTextColor(15, 23, 42);
  const titleLines = doc.splitTextToSize(item.title, contentWidth);
  doc.text(titleLines, margin, y);
  y += titleLines.length * 6.5 + 4;

  // Metadata Grid Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(margin, y, contentWidth, 18, 2, 2, "FD");

  const colW = contentWidth / 4;
  const metaFields = [
    { label: "PRIMARY JOURNAL", val: item.journal.split("&")[0].trim() },
    { label: "SAMPLE COHORT", val: item.sampleSize },
    { label: "STUDY DESIGN", val: item.studyType.length > 22 ? item.studyType.substring(0, 20) + "..." : item.studyType },
    { label: "INDEXING", val: item.doiOrPmid.split("/")[0].trim() },
  ];

  metaFields.forEach((mf, i) => {
    const colX = margin + i * colW + 4;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.5);
    doc.setTextColor(100, 116, 139);
    doc.text(mf.label, colX, y + 6);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(23, 37, 84);
    const valLines = doc.splitTextToSize(mf.val, colW - 6);
    doc.text(valLines[0] || mf.val, colX, y + 12);
  });
  y += 24;

  // Primary Clinical Stat Highlight Banner
  doc.setFillColor(23, 37, 84); // #172554
  doc.roundedRect(margin, y, contentWidth, 16, 2, 2, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(244, 114, 182); // pink-400
  doc.text(item.keyStat, margin + 8, y + 9);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(203, 213, 225);
  doc.text("VERIFIED CLINICAL OUTCOME", margin + 8, y + 13);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  const statDescLines = doc.splitTextToSize(item.statLabel, contentWidth - 65);
  doc.text(statDescLines, margin + 55, y + 7.5);
  y += 22;

  const addSection = (title: string, content: string | string[], isList = false) => {
    checkPageBreak(25);

    // Section Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(23, 37, 84);
    doc.text(title, margin, y);
    y += 1.5;

    doc.setDrawColor(234, 52, 132);
    doc.setLineWidth(0.6);
    doc.line(margin, y, margin + 25, y);
    y += 5;

    // Content
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);

    if (isList && Array.isArray(content)) {
      content.forEach((itemText) => {
        checkPageBreak(12);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(234, 52, 132);
        doc.text("•", margin + 2, y);

        doc.setFont("helvetica", "normal");
        doc.setTextColor(51, 65, 85);
        const bulletLines = doc.splitTextToSize(itemText, contentWidth - 8);
        doc.text(bulletLines, margin + 6, y);
        y += bulletLines.length * 4.2 + 2;
      });
    } else if (typeof content === "string") {
      const lines = doc.splitTextToSize(content, contentWidth);
      checkPageBreak(lines.length * 4.2 + 4);
      doc.text(lines, margin, y);
      y += lines.length * 4.2 + 4;
    }
  };

  // 1. Abstract
  addSection("1. STRUCTURED CLINICAL ABSTRACT", item.abstract);

  // 2. Scientific Mechanism
  addSection("2. BIOLOGICAL & NEURO-EPIGENETIC MECHANISM", item.scientificMechanism);

  // 3. Vedic Correlation
  addSection("3. VEDIC GARBH SANSKAR CORRELATION", item.vedicCorrelation);

  // 4. Key Findings
  addSection("4. KEY CLINICAL TRIAL FINDINGS", item.keyFindings, true);

  // 5. Clinical Takeaways
  checkPageBreak(25);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(23, 37, 84);
  doc.text("5. ACTIONABLE GUIDANCE FOR PARENTS", margin, y);
  y += 1.5;
  doc.setDrawColor(234, 52, 132);
  doc.setLineWidth(0.6);
  doc.line(margin, y, margin + 25, y);
  y += 5;

  item.clinicalTakeaways.forEach((c) => {
    checkPageBreak(14);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(23, 37, 84);
    doc.text(`• ${c.title}:`, margin + 2, y);
    y += 4;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const cLines = doc.splitTextToSize(c.description, contentWidth - 4);
    doc.text(cLines, margin + 4, y);
    y += cLines.length * 4.2 + 3;
  });

  // 6. Doctor Quote Box
  checkPageBreak(25);
  doc.setFillColor(255, 245, 248);
  doc.setDrawColor(234, 52, 132);
  doc.roundedRect(margin, y, contentWidth, 20, 2, 2, "FD");
  doc.setLineWidth(1);
  doc.line(margin, y, margin, y + 20);

  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  const quoteLines = doc.splitTextToSize(`"${item.doctorQuote.quote}"`, contentWidth - 8);
  doc.text(quoteLines, margin + 4, y + 6);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(23, 37, 84);
  doc.text(`— ${item.doctorQuote.author}, ${item.doctorQuote.designation}`, margin + 4, y + 16);
  y += 26;

  // 7. References
  checkPageBreak(20);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(23, 37, 84);
  doc.text("6. PEER-REVIEWED CITATIONS & REFERENCES", margin, y);
  y += 4.5;

  item.references.forEach((ref) => {
    checkPageBreak(10);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    const refText = `${ref.authors} (${ref.year}). ${ref.title}. ${ref.publication}.`;
    const refLines = doc.splitTextToSize(refText, contentWidth);
    doc.text(refLines, margin, y);
    y += refLines.length * 3.8 + 2;
  });

  // Add Footers & Page Numbers to All Pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `© ${new Date().getFullYear()} AstroBaby™ Clinical Research • For maternal health education and clinical reference.`,
      margin,
      pageHeight - 8
    );
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin, pageHeight - 8, { align: "right" });
  }

  // Trigger browser download directly as PDF file
  const filename = `AstroBaby_Research_Paper_${item.slug}.pdf`;
  doc.save(filename);
}
