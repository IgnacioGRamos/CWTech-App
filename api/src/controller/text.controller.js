
const textController = async (req, res) => {

    const { text } = req.query;

    if (!text) {
        return res.json({ success: false, message: `No text`  });
    }

    try {
        const newText = text.split("").reverse().join("");

        const len = text.length; 

        var palindrome = true;

        for (let i = 0; i < len / 2; i++) {  
  
            if (text[i].toLowerCase() !== text[len - 1 - i].toLowerCase()) {  
                palindrome = false
    
            }  
        } 

        return res.status(200).json({ success: true, message: newText, palindrome: palindrome });

    } catch (e) {
        return res.status(400).json({ success: false, message: e.message });
    }
}

export default textController;