import React, { useState } from "react";

function UserForm() {
  const [ans, setAns] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    q11: "",
    q12: "",
    q13: "",
    q14: "",
    q15: "",
  });

  const handleClick = async (e) => {
    e.preventDefault();
    const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15 } = ans;
    const response = await fetch("http://localhost:5000/api/form/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15}),
    });
    const json = await response.json();
    console.log(json);
  };
  const onChange = (e) => {
    setAns({ ...ans, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <div>
          <p>1) Investment Time Horizon:</p>
          <p>q: "How long do you plan to invest your money?"</p>
          <input
            type="radio"
            id="short_term"
            name="q1"
            value="short_term"
            onChange={onChange}
          />
          <label htmlFor="short_term">Short-term (1-3 years)</label>
          <br />
          <input
            type="radio"
            id="medium_term"
            name="q1"
            value="medium_term"
            onChange={onChange}
          />
          <label htmlFor="medium_term">Medium-term (3-5 years)</label>
          <br />
          <input
            type="radio"
            id="long_term"
            name="q1"
            value="long_term"
            onChange={onChange}
          />
          <label htmlFor="long_term">Long-term (5+ years)</label>
          <br />
        </div>
        <hr />
        <div>
          <p>2) Comfort Level with Market Fluctuations:</p>
          <p>
            q: "How comfortable are you with the idea that the value of your
            investments may go up and down in the short term?"
          </p>
          <input
            type="radio"
            id="very_comfortable"
            name="q2"
            value="very_comfortable"
            onChange={onChange}
          />
          <label htmlFor="very_comfortable">Very comfortable</label>
          <br />
          <input
            type="radio"
            id="somewhat_comfortable"
            name="q2"
            value="somewhat_comfortable"
            onChange={onChange}
          />
          <label htmlFor="somewhat_comfortable">Somewhat comfortable</label>
          <br />
          <input type="radio" id="neutral" name="q2" value="neutral" />
          <label htmlFor="neutral">Neutral</label>
          <br />
          <input
            type="radio"
            id="somewhat_uncomfortable"
            name="q2"
            value="somewhat_uncomfortable"
            onChange={onChange}
          />
          <label htmlFor="somewhat_uncomfortable">Somewhat uncomfortable</label>
          <br />
          <input
            type="radio"
            id="very_uncomfortable"
            name="q2"
            value="very_uncomfortable"
            onChange={onChange}
          />
          <label htmlFor="very_uncomfortable">Very uncomfortable</label>
          <br />
        </div>
        <hr />
        <div>
          <p>3) Previous Investment Experience:</p>
          <p>
            q: "What is your level of experience with investing in
            cryptocurrencies or traditional assets?"
          </p>
          <input type="radio" id="beginner" name="q3" value="beginner" />
          <label htmlFor="beginner">Beginner (limited or no experience)</label>
          <br />
          <input
            type="radio"
            id="intermediate"
            name="q3"
            value="intermediate"
            onChange={onChange}
          />
          <label htmlFor="intermediate">Intermediate (some experience)</label>
          <br />
          <input type="radio" id="advanced" name="q3" value="advanced" />
          <label htmlFor="advanced">
            Advanced (experienced in managing a diverse portfolio)
          </label>
          <br />
        </div>
        <hr />
        <div>
          <p>4) Financial Goals:</p>
          <p>q: "What are your primary financial goals for investing?"</p>
          <input
            type="radio"
            id="wealth_preservation"
            name="q4"
            value="wealth_preservation"
            onChange={onChange}
          />
          <label htmlFor="wealth_preservation">
            Wealth preservation (protecting existing capital)
          </label>
          <br />
          <input
            type="radio"
            id="capital_growth"
            name="q4"
            value="capital_growth"
            onChange={onChange}
          />
          <label htmlFor="capital_growth">
            Capital growth (maximizing returns)
          </label>
          <br />
          <input
            type="radio"
            id="income_generation"
            name="q4"
            value="income_generation"
            onChange={onChange}
          />
          <label htmlFor="income_generation">
            Income generation (receiving regular dividends or interest)
          </label>
          <br />
        </div>
        <hr />
        <div>
          <p>5) Reaction to Potential Losses:</p>
          <p>
            q: "How would you react if your investment portfolio experienced a
            significant decline in value?"
          </p>
          <input
            type="radio"
            id="stay_the_course"
            name="q5"
            value="stay_the_course"
            onChange={onChange}
          />
          <label htmlFor="stay_the_course">
            Stay the course and hold onto investments
          </label>
          <br />
          <input
            type="radio"
            id="reevaluate"
            name="q5"
            value="reevaluate"
            onChange={onChange}
          />
          <label htmlFor="reevaluate">
            Reevaluate and potentially adjust the investment strategy
          </label>
          <br />
          <input
            type="radio"
            id="sell_investments"
            name="q5"
            value="sell_investments"
            onChange={onChange}
          />
          <label htmlFor="sell_investments">
            Sell investments to limit further losses
          </label>
          <br />
        </div>
        <hr />
        <div>
          <p>6) Current Financial Situation:</p>
          <p>q: "How would you describe your current financial situation?"</p>
          <input
            type="radio"
            id="comfortable"
            name="q6"
            value="comfortable"
            onChange={onChange}
          />
          <label htmlFor="comfortable">
            Comfortable (Stable income and savings)
          </label>
          <br />
          <input
            type="radio"
            id="adequate"
            name="q6"
            value="adequate"
            onChange={onChange}
          />
          <label htmlFor="adequate">
            Adequate (Meeting basic needs with some room for savings)
          </label>
          <br />
          <input
            type="radio"
            id="strained"
            name="q6"
            value="strained"
            onChange={onChange}
          />
          <label htmlFor="strained">
            Strained (Meeting basic needs with little room for savings)
          </label>
          <br />
        </div>
        <hr />
        <div>
          <p>7) Knowledge of Cryptocurrency:</p>
          <p>q: "How would you rate your knowledge of cryptocurrencies?"</p>
          <input
            type="radio"
            id="expert"
            name="q7"
            value="expert"
            onChange={onChange}
          />
          <label htmlFor="expert">Expert (In-depth understanding)</label>
          <br />
          <input
            type="radio"
            id="intermediate_knowledge"
            name="q7"
            value="intermediate"
            onChange={onChange}
          />
          <label htmlFor="intermediate_knowledge">
            Intermediate (Some understanding)
          </label>
          <br />
          <input
            type="radio"
            id="novice"
            name="q7"
            value="novice"
            onChange={onChange}
          />
          <label htmlFor="novice">Novice (Limited understanding)</label>
          <br />
        </div>
        <hr />
        <div>
          <p>8) Emergency Fund:</p>
          <p>
            q: "Do you have an emergency fund set aside for unexpected
            expenses?"
          </p>
          <input
            type="radio"
            id="well_prepared"
            name="q8"
            value="well_prepared"
            onChange={onChange}
          />
          <label htmlFor="well_prepared">Yes, well-prepared</label>
          <br />
          <input
            type="radio"
            id="partially_prepared"
            name="q8"
            value="partially_prepared"
            onChange={onChange}
          />
          <label htmlFor="partially_prepared">Partially prepared</label>
          <br />
          <input
            type="radio"
            id="not_prepared"
            name="q8"
            value="not_prepared"
            onChange={onChange}
          />
          <label htmlFor="not_prepared">Not prepared</label>
          <br />
        </div>
        <hr />
        <div>
          <p>9) Risk Capacity:</p>
          <p>
            q: "How much of your total investment portfolio are you willing to
            allocate to higher-risk investments?"
          </p>
          <input
            type="radio"
            id="aggressive"
            name="q9"
            value="aggressive"
            onChange={onChange}
          />
          <label htmlFor="aggressive">
            Aggressive (Significant allocation to higher-risk investments)
          </label>
          <br />
          <input
            type="radio"
            id="moderate"
            name="q9"
            value="moderate"
            onChange={onChange}
          />
          <label htmlFor="moderate">Moderate (Balanced allocation)</label>
          <br />
          <input
            type="radio"
            id="conservative"
            name="q9"
            value="conservative"
            onChange={onChange}
          />
          <label htmlFor="conservative">
            Conservative (Limited allocation to higher-risk investments)
          </label>
          <br />
        </div>
        <hr />
        <div>
          <p>10) Liquidity Needs:</p>
          <p>
            q: "How soon might you need to access a significant portion of your
            investment funds?"
          </p>
          <input
            type="radio"
            id="no_immediate_need"
            name="q10"
            value="no_immediate_need"
            onChange={onChange}
          />
          <label htmlFor="no_immediate_need">
            No immediate need (Long-term investment horizon)
          </label>
          <br />
          <input
            type="radio"
            id="medium_term_liquidity"
            name="q10"
            value="medium_term"
            onChange={onChange}
          />
          <label htmlFor="medium_term_liquidity">
            Medium-term (Possible need within 3-5 years)
          </label>
          <br />
          <input
            type="radio"
            id="short_term_liquidity"
            name="q10"
            value="short_term"
            onChange={onChange}
          />
          <label htmlFor="short_term_liquidity">
            Short-term (Possible need within 1-3 years)
          </label>
          <br />
        </div>
        <hr />
        <div>
          <p>11) Retirement Planning Efforts:</p>
          <p>q: "How would you rate your retirement planning efforts?"</p>
          <input
            type="radio"
            id="well_prepared"
            name="q11"
            value="well_prepared"
            onChange={onChange}
          />
          <label htmlFor="well_prepared">
            Well-prepared (Have a solid retirement plan in place)
          </label>
          <br />
          <input
            type="radio"
            id="somewhat_prepared"
            name="q11"
            value="somewhat_prepared"
            onChange={onChange}
          />
          <label htmlFor="somewhat_prepared">
            Somewhat prepared (Have begun planning but could do more)
          </label>
          <br />
          <input
            type="radio"
            id="not_prepared"
            name="q11"
            value="not_prepared"
            onChange={onChange}
          />
          <label htmlFor="not_prepared">
            Not prepared (Have not started planning)
          </label>
          <br />
          <p>
            Sample Response: "I believe I am well-prepared for retirement with a
            solid plan in place."
          </p>
        </div>
        <hr />
        <div>
          <p>12) Debt Management:</p>
          <p>
            q: "How would you describe your current approach to managing debt?"
          </p>
          <input
            type="radio"
            id="proactive_debt_management"
            name="q12"
            value="proactive_debt_management"
            onChange={onChange}
          />
          <label htmlFor="proactive_debt_management">
            Proactive (Consistently paying off debts and minimizing new ones)
          </label>
          <br />
          <input
            type="radio"
            id="moderate_debt_management"
            name="q12"
            value="moderate_debt_management"
            onChange={onChange}
          />
          <label htmlFor="moderate_debt_management">
            Moderate (Making regular payments but carrying some debt)
          </label>
          <br />
          <input
            type="radio"
            id="reactive_debt_management"
            name="q12"
            value="reactive_debt_management"
            onChange={onChange}
          />
          <label htmlFor="reactive_debt_management">
            Reactive (Struggling to manage debt effectively)
          </label>
          <br />
          <p>
            Sample Response: "I am proactive in managing my debt, consistently
            paying it off and avoiding new debt whenever possible."
          </p>
        </div>
        <hr />
        <div>
          <p>13) Investment Diversification:</p>
          <p>
            q: "How diversified is your investment portfolio across different
            asset classes?"
          </p>
          <input
            type="radio"
            id="highly_diversified"
            name="q13"
            value="highly_diversified"
            onChange={onChange}
          />
          <label htmlFor="highly_diversified">
            Highly diversified (Spread across various asset classes)
          </label>
          <br />
          <input
            type="radio"
            id="moderately_diversified"
            name="q13"
            value="moderately_diversified"
            onChange={onChange}
          />
          <label htmlFor="moderately_diversified">
            Moderately diversified (Some diversification but could be improved)
          </label>
          <br />
          <input
            type="radio"
            id="not_diversified"
            name="q13"
            value="not_diversified"
            onChange={onChange}
          />
          <label htmlFor="not_diversified">
            Not diversified (Concentrated in a few assets)
          </label>
          <br />
          <p>
            Sample Response: "My investment portfolio is highly diversified
            across different asset classes."
          </p>
        </div>
        <hr />
        <div>
          <p>14) Financial Goals:</p>
          <p>q: "How clear are your financial goals and objectives?"</p>
          <input
            type="radio"
            id="crystal_clear_goals"
            name="q14"
            value="crystal_clear_goals"
            onChange={onChange}
          />
          <label htmlFor="crystal_clear_goals">
            Crystal clear (Specific, achievable goals with a timeline)
          </label>
          <br />
          <input
            type="radio"
            id="somewhat_clear_goals"
            name="q14"
            value="somewhat_clear_goals"
            onChange={onChange}
          />
          <label htmlFor="somewhat_clear_goals">
            Somewhat clear (Have general goals but need to define them further)
          </label>
          <br />
          <input
            type="radio"
            id="unclear_goals"
            name="q14"
            value="unclear_goals"
            onChange={onChange}
          />
          <label htmlFor="unclear_goals">
            Unclear (Lack clear financial goals)
          </label>
          <br />
          <p>
            Sample Response: "I have crystal clear financial goals with specific
            targets and timelines."
          </p>
        </div>
        <hr />
        <div>
          <p>15) Tax Planning:</p>
          <p>
            q: "How proactive are you in managing your taxes and maximizing tax
            efficiency?"
          </p>
          <input
            type="radio"
            id="very_proactive_tax_planning"
            name="q15"
            value="very_proactive_tax_planning"
            onChange={onChange}
          />
          <label htmlFor="very_proactive_tax_planning">
            Very proactive (Regularly review tax strategies and take advantage
            of tax-saving opportunities)
          </label>
          <br />
          <input
            type="radio"
            id="moderately_proactive_tax_planning"
            name="q15"
            value="moderately_proactive_tax_planning"
            onChange={onChange}
          />
          <label htmlFor="moderately_proactive_tax_planning">
            Moderately proactive (Consider tax implications but could do more to
            optimize)
          </label>
          <br />
          <input
            type="radio"
            id="not_proactive_tax_planning"
            name="q15"
            value="not_proactive_tax_planning"
            onChange={onChange}
          />
          <label htmlFor="not_proactive_tax_planning">
            Not proactive (Rarely consider tax implications in financial
            decisions)
          </label>
          <br />
          <p>
            Sample Response: "I am very proactive in managing my taxes,
            constantly seeking ways to maximize tax efficiency."
          </p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
