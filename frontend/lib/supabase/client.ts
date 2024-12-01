import { createBrowserClient } from "@supabase/ssr";

import { Database } from "../supabase";
import { TypedSupabaseClient } from "../types";

let client: TypedSupabaseClient | undefined;

export function getSupabaseBrowserClient() {
    if (client) {
        return client;
    }

    client = createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    return client;
}

// TODO: useless function
function useSupabaseBrowser() {
    return getSupabaseBrowserClient();
}

export default useSupabaseBrowser;