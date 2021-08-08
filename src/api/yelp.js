
export const yelp = async (args) => {
    try {
        const response = await fetch(`https://api.yelp.com/v3/businesses/${args}`, {
            headers: {
                Authorization: `Bearer 9ABB2ZkedPZ5dJsr4cPtYXu1bGCaAsESG7zh0Zb-M0wrnBSgH2mVcocTMfcRWv8G1t7_sFoz5Sc-0pxXkkFt1XHG5gd-oinDSnOCErQmnU5fkqlQ_NPt7l2qv_QMYXYx`
            },
        });
        const result = await response.json();
        return result;
    } catch (e) {
        console.log(e);
    }
}