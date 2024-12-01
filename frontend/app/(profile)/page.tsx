"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
    const [mail, setMail] = useState("kakayatopochta@mail.ru");
    const [fio, setFio] = useState("Просто Чиловый Парень");
    const [contacts, setContacts] = useState("8 999 000 77 88");

    return (
        <div className="flex-grow flex flex-col justify-center">
            <Card className="my-auto mx-auto w-full max-w-[400px] bg-white/30 !backdrop-blur-sm">
                <CardHeader className="flex flex-row justify-between items-center">
                    <Button className="w-fit rounded-full font-extrabold">
                        Личный кабинет
                    </Button>
                    <Button
                        variant={"secondary"}
                        className="w-fit rounded-full gap-0 !m-0 font-extrabold"
                    >
                        КЛИЕНТ
                    </Button>
                </CardHeader>
                <CardContent className="form">
                    <Label className="form__label-text">
                        Почта
                        <Input
                        className="form__input"
                            onChange={(event) => setMail(event.target.value)}
                            value={mail}
                        />
                    </Label>
                    <Label className="form__label-text">
                        ФИО
                        <Input
                        className="form__input"
                            onChange={(event) => setFio(event.target.value)}
                            value={fio}
                        />
                    </Label>
                    <Label className="form__label-textarea">
                        Контакты
                        <Textarea
                            className="form__textarea"
                            value={contacts}
                            onChange={(event) =>
                                setContacts(event.target.value)
                            }
                        />
                    </Label>
                </CardContent>
                <CardFooter className="flex flex-col space-y-3">
                    <Link href="/reports/add">
                        <Button className="w-40">Оставить заявку</Button>
                    </Link>
                    <Link href="/reports">
                        <Button className="w-40" variant={"secondary"}>
                            Список заявок
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
