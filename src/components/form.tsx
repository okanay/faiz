"use client";

import React, { useState } from "react";
import { Wrapper } from "@/components/form-ui/wrapper";
import { Label } from "@/components/form-ui/label";
import { Select } from "@/components/form-ui/select";
import { InputCurrency } from "@/components/form-ui/currency-input";
import { Button } from "@/components/form-ui/button";
import { calculatePayments } from "@/utils/calculate";
import useResult from "@/hooks/useResult";

const Form = () => {
  const [price, setPrice] = useState<number>(0);
  const [interest, setInterest] = useState<number>(0);
  const [installment, setInstallment] = useState<number>(1);

  const { setResult } = useResult();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult([]);

    const result = calculatePayments(price, interest, installment);

    if (result.length === 0) return;
    setResult(result.reverse());
  }

  return (
    <form
      className="flex w-full max-w-[320px] flex-shrink-0 flex-col items-start justify-start gap-4 tracking-wider"
      onSubmit={onSubmit}
    >
      <Wrapper>
        <Label htmlFor="price">Fiyat</Label>
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
        <Label htmlFor="interest">Faiz</Label>
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
        <Label htmlFor="installment">Taksit</Label>
        <Select
          id="installment"
          name={"installment"}
          placeholder={"1 Taksit"}
          defaultValue={1}
          className={"w-full"}
          topics={Array.from({ length: 120 }, (_, i) => String(i + 1))}
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
