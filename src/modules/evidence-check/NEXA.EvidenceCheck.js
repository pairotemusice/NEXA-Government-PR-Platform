/**
 * ============================================================
 * NEXA Evidence Check Engine
 * Version : 0.1.0-alpha
 * ============================================================
 */

class NEXAEvidenceCheck {

    analyze(news = "") {

        const result = {
            score: 100,
            status: "PASS",
            missing: [],
            recommendation: []
        };

        const rules = [
            {
                name: "Who",
                keywords: ["นาย", "นาง", "นางสาว", "ผู้ว่าราชการ", "ผู้อำนวยการ"]
            },
            {
                name: "Where",
                keywords: ["จังหวัด", "อำเภอ", "ตำบล", "ณ"]
            },
            {
                name: "When",
                keywords: ["วันที่", "เวลา", "พ.ศ.", "256"]
            }
        ];

        rules.forEach(rule => {

            const found = rule.keywords.some(k => news.includes(k));

            if (!found) {

                result.score -= 10;

                result.missing.push(rule.name);

                result.recommendation.push(`ควรเพิ่มข้อมูล ${rule.name}`);

            }

        });

        if (result.score < 80) {

            result.status = "REVIEW";

        }

        return result;

    }

}

export default NEXAEvidenceCheck;