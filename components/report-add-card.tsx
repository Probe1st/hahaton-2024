"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useSupabaseBrowser from "@/lib/supabase/client";
import { ReportTitle, ReportType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
    reportTypes: ReportType[];
    reportTitles: ReportTitle[];
};

export default function ReportAddCard({ reportTypes, reportTitles }: Props) {
    const [deadline, setDeadline] = useState<Date | undefined>(new Date());
    const [description, setDescription] = useState("");
    const [images, setImages] = useState("");
    const [reportTypeSelected, setReportTypeSelected] = useState("");
    const [reportTitleSelected, setReportTitleSelected] = useState("");

    const supabase = useSupabaseBrowser();

    async function handleSubmit(event) {
        const { data } = await supabase.from("reports").insert({
            deadline,
            description,
            repor 
        });
    }

    return (
        <div className="flex-grow flex flex-col justify-center">
            <Card className="my-auto mx-auto py-5 w-full max-w-[400px] bg-white/30 !backdrop-blur-sm">
                <CardHeader className="flex fle-col">
                    <Button className="rounded-full w-fit font-extrabold">
                        Оставить заявку
                    </Button>
                </CardHeader>
                <CardContent className="add-report-form !font-thin">
                    <Label className="!pr-2">
                        <Select
                            value={reportTypeSelected}
                            onValueChange={setReportTypeSelected}
                        >
                            <SelectTrigger className="border-none shadow-none">
                                <SelectValue placeholder="Выберете тип заявки" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Типы заявок</SelectLabel>
                                    {reportTypes.map((type) => (
                                        <SelectItem
                                            key={type.id}
                                            value={type.name}
                                        >
                                            {type.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Label>
                    <Label className="!pr-2">
                        <Select
                            value={reportTitleSelected}
                            onValueChange={setReportTitleSelected}
                        >
                            <SelectTrigger className="border-none shadow-none">
                                <SelectValue placeholder="Выберете тему" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Темы</SelectLabel>
                                    {reportTitles.map((title) => (
                                        <SelectItem
                                            key={title.id}
                                            value={title.name!}
                                        >
                                            {title.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Label>
                    <Label className="form__label-text px-5">
                        <p>Установите срок выполнения</p>
                        <p>{`${(deadline?.getDay() ?? 0) + 1}.${
                            (deadline?.getMonth() ?? 0) + 1
                        }.${deadline?.getFullYear() ?? 1}`}</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="w-2/3 flex flex-row justify-end">
                                    <Image
                                        alt=""
                                        src={"/calendar.svg"}
                                        width={"20"}
                                        height={"20"}
                                    />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <Calendar
                                    mode="single"
                                    selected={deadline}
                                    onSelect={setDeadline}
                                    className="form__input"
                                />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </Label>
                    <Label>
                        <Textarea
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                            placeholder="Описание заявки"
                            className="form__textarea"
                        />
                        <Image
                            src={"/pencil.svg"}
                            width={20}
                            height={20}
                            alt=""
                        />
                    </Label>
                    <Label className="form__label-text pr-5">
                        Загрузите изображения
                        <Image
                            alt=""
                            width={"20"}
                            height={"20"}
                            src={"/image_add.svg"}
                        />
                        <Input
                            type="file"
                            value={images}
                            onChange={(event) => setImages(event.target.value)}
                            className="form__input hidden"
                        />
                    </Label>
                </CardContent>
                <CardFooter className="flex flex-col justify-center">
                    <Link href={"/reports"}>
                        <Button onClick={handleSubmit}>Отправить</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
