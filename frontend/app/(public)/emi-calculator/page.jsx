import PageHeader from "../../components/frontend/PageElements/PageHeader";
import CTASection from "../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "EMI Calculator - Stellar Structures Limited",
  description: "Calculate your monthly EMI for apartment purchases at Stellar Structures Limited. Understand how equated monthly installments work.",
  keywords: ["EMI calculator Bangladesh", "mortgage calculator Dhaka", "monthly installment calculator"],
  openGraph: {
    title: "EMI Calculator - Stellar Structures",
    description: "Plan your finances with our EMI calculator.",
    type: "website",
  },
};

const emiData = [
  {
    title: "What is EMI?",
    desc: "Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender on a specified date each month. EMI is used to repay both the principal amount and interest over a fixed tenure, making large property purchases more manageable.",
  },
  {
    title: "How It Works",
    desc: "Your EMI is calculated based on three factors: the total loan amount, the interest rate offered by your bank, and the loan tenure. In the initial years, a larger portion of your EMI goes toward interest, while in later years more goes toward repaying the principal.",
  },
  {
    title: "The Formula",
    desc: "EMI = P × r × (1 + r)^n / [(1 + r)^n - 1], where P is the principal loan amount, r is the monthly interest rate, and n is the total number of monthly installments. This formula ensures equal payments throughout the loan tenure.",
  },
];

export default function EMICalculatorPage() {
  return (
    <>
      <PageHeader
        tag="Customers"
        title="EMI Calculator"
        subtitle="Understand how equated monthly installments work and plan your finances wisely."
        breadcrumbs={[{ label: "Customers" }, { label: "EMI Calculator" }]}
      />
      <section style={{ padding: "clamp(40px, 5vw, 80px) 0" }}>
        <div className="container">
          <div className="row">
            {emiData.map((item, i) => (
              <div className="col-md-4" key={i} style={{ marginBottom: "30px" }}>
                <div
                  style={{
                    padding: "32px",
                    background: "#FAFAF8",
                    border: "1px solid #EFEFED",
                    height: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(20px, 2vw, 24px)",
                      fontWeight: 600,
                      color: "#061424",
                      marginBottom: "16px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#8A8A85",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "40px",
              padding: "32px",
              background: "#061424",
              borderRadius: "4px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(22px, 2.5vw, 28px)",
                fontWeight: 600,
                color: "#C9A227",
                marginBottom: "12px",
              }}
            >
              Note
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "#CCCCCC",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              The actual EMI may vary depending on the interest rate offered by your bank and the final approved loan amount. Contact our sales team for a personalized EMI calculation based on your specific requirements and our partner bank rates.
            </p>
          </div>
        </div>
      </section>
      <CTASection
        title="Get a Personalized Quote"
        subtitle="Our sales team will help you understand the exact monthly outflow for your chosen apartment."
        primaryBtn={{ label: "Contact Sales", href: "/contact" }}
        secondaryBtn={{ label: "Payment Plans", href: "/payment-plan" }}
      />
    </>
  );
}
