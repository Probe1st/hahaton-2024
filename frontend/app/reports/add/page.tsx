/* eslint-disable react-hooks/rules-of-hooks */
import ReportAddCard from "@/components/report-add-card";
import useSupabaseServer from "@/lib/supabase/server";
import { cookies } from "next/headers";

export default async function ReportAddPage() {
    const cookieStore = cookies();
    const supabase = useSupabaseServer(cookieStore);

    const { data: reportTypes } = await supabase
        .from("report_types")
        .select("*");

    const { data: reportTitles } = await supabase
        .from("report_titles")
        .select("*");

    return (
        <ReportAddCard
            reportTitles={reportTitles ?? []}
            reportTypes={reportTypes ?? []}
        />
    );
}
