import exprss, { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
    const users: string[] = ["A", "B", "C", "D"];
    res.json({ users, })


}
