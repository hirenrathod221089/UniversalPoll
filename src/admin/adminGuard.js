import { waitForAuth, isAdmin } from "../services/authService";

export async function protectAdminPage() {

    const user = await waitForAuth();


    if (!user) {


        return {

            success: false,

            message: "Please login first."

        };

    }


    const admin = await isAdmin(user.email);


    if (!admin) {

        return {

            success: false,

            message: "Access Denied"

        };

    }

    return {

        success: true

    };

}