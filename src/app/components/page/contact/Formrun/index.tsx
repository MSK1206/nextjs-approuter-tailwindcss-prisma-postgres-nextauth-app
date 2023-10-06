'use client';
import { useEffect } from 'react';

export default function Formrun() {
  const FormrunID: string = `${process.env.NEXT_PUBLIC_FORMRUN_FORM_ID}`;
  useEffect(() => {
    const head = document.getElementsByTagName('head')[0] as HTMLElement;
    const scriptUrl = document.createElement('script');
    scriptUrl.async = true; // 非同期読み込みを有効
    scriptUrl.src = 'https://sdk.form.run/js/v2/embed.js';
    head.appendChild(scriptUrl);
    return () => {
      // コンポーネントがアンマウントされる際にHeadからスクリプトのクリーンアップを行う
      head.removeChild(scriptUrl);
    };
  }, []);
  return (
    <>
      <div className="min-w-[85vw] max-sm:min-w-[calc(100vw-15vw)] max-md:min-w-[calc(100vw-15vw)] max-xl:min-w-[calc(100vw-15vw)]">
        <div
          className="formrun-embed"
          data-formrun-form={FormrunID}
          data-formrun-redirect="true"
        />
      </div>
    </>
  );
}
