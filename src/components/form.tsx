"use client";

import React, { useState } from "react";
import { Wrapper } from "@/components/form-ui/wrapper";
import { Label } from "@/components/form-ui/label";
import { Select } from "@/components/form-ui/select";
import { InputCurrency } from "@/components/form-ui/currency-input";
import { Button } from "@/components/form-ui/button";
import { calculatePayments } from "@/utils/calculate";
import useResult from "@/hooks/useResult";
import InputChecked from "@/components/form-ui/input-checked";

const Form = () => {
  const [price, setPrice] = useState<number>(0);
  const [interest, setInterest] = useState<number>(0);
  const [installment, setInstallment] = useState<number>(1);
  const [tax, setTax] = useState<boolean>(false);

  const { setResult } = useResult();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult([]);

    const result = calculatePayments(price, interest, installment, tax);

    if (result.length === 0) return;
    setResult(result);
  }

  return (
    <form
      className="flex w-[320px] flex-shrink-0 flex-col items-start justify-center gap-4 tracking-wider"
      onSubmit={onSubmit}
    >
      <Wrapper>
        <Label htmlFor="price">Ürün Fiyatı</Label>
        <InputCurrency
          id="price"
          name="price"
          prefix="₺"
          placeholder={"₺55.000"}
          onValueChange={(event) => {
            setPrice(Number(event));
          }}
        />
      </Wrapper>
      <Wrapper>
        <Label htmlFor="interest">Faiz Oranı</Label>
        <InputCurrency
          id="interest"
          name="interest"
          suffix="%"
          placeholder={"40%"}
          onValueChange={(event) => {
            setInterest(Number(event));
          }}
        />
      </Wrapper>
      <Wrapper>
        <Label>Faiz Geliri Vergisi</Label>
        <div className={"flex flex-row items-center justify-start gap-2"}>
          <InputChecked
            name={"auto-radio"}
            id={"auto-radio"}
            onChange={() => setTax(true)}
            checked={tax}
          >
            Otomatik
          </InputChecked>
          <InputChecked
            name={"close-radio"}
            id={"close-radio"}
            onChange={() => setTax(false)}
            checked={!tax}
          >
            Kapalı
          </InputChecked>
        </div>
      </Wrapper>
      <Wrapper>
        <Label htmlFor="installment">Taksit Sayısı</Label>
        <Select
          id="installment"
          name={"installment"}
          placeholder={"1 Taksit"}
          defaultValue={1}
          className={"w-full"}
          topics={Array.from({ length: 118 }, (_, i) => String(i + 3))}
          onChange={(event) => {
            setInstallment(Number(event.target.value));
          }}
        />
      </Wrapper>
      <Wrapper>
        <Button type="submit">Hesapla</Button>
      </Wrapper>
    </form>
  );
};

export default Form;
