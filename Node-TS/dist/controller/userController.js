export const getUsers = (req, res) => {
    const users = ["A", "B", "C", "D"];
    res.json({ users, });
};
