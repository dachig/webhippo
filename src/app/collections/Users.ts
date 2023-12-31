import { CollectionConfig } from "payload/types";
import { PrimaryActionEmailHtml } from "../components/emails/PrimaryActionEmail";

export const Users: CollectionConfig = {
    slug: "users",
    auth: {
        verify: {
            generateEmailHTML: ({ token }) => {
                return PrimaryActionEmailHtml({
                    actionLabel: "verify your account",
                    buttonText: "Verify Account",
                    href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`
                })
            }
        }
    },
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [
        {
            name: "role",
            defaultValue: "user",
            required: true,
            admin: { //to be able to select role on creating account from backend
                condition: () => false
            },
            type: "select",
            options: [
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },

            ]
        }
    ]
}