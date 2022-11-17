import * as S from "./creator.styles";
import { ICreatorPresenterProps } from "./creator.types";
import Input01 from "../../../commons/input/input01/input01";
import Upload01 from "../../../commons/upload/upload01/upload01";
import Upload02 from "../../../commons/upload/upload02/upload02";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import ZipcodeModal from "../../../commons/modal/zipcode";
import CountDown from "../../../commons/count";
import Input03 from "../../../commons/input/input03/input03";

export default function CreatorPresenter(P: ICreatorPresenterProps) {
  const {
    onClickSignUp,
    register,
    handleSubmit,
    formState,
    onChangeCertifiFile,
    onChageProfileFile,
    profilePreview,
    onClickCertNumber,
    onClickCertConfirm,
    onClickNameConfirm,
    setValue,
    openTime,
    onChangeChecked,
  } = P;
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Container>
      <S.Title>크리에이터 회원가입</S.Title>
      <S.Form onSubmit={handleSubmit(onClickSignUp)}>
        <S.Label>
          <S.Svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M943.834704 211.291241l0 601.418542-863.670431 0L80.164273 211.291241 943.834704 211.291241M943.834704 174.452217l-863.670431 0c-20.345374 0-36.839023 16.492626-36.839023 36.839023l0 601.418542c0 20.346397 16.493649 36.839023 36.839023 36.839023l863.670431 0c20.346397 0 36.839023-16.492626 36.839023-36.839023L980.673727 211.291241C980.673727 190.944843 964.181101 174.452217 943.834704 174.452217L943.834704 174.452217z" />
            <path d="M814.62797 414.785911c0 10.172687-8.246825 18.419512-18.419512 18.419512L611.548762 433.205423c-10.172687 0-18.419512-8.246825-18.419512-18.419512l0 0c0-10.172687 8.246825-18.419512 18.419512-18.419512l184.659697 0C806.382169 396.3664 814.62797 404.613224 814.62797 414.785911L814.62797 414.785911z" />
            <path d="M814.62797 512c0 10.172687-8.246825 18.419512-18.419512 18.419512L611.548762 530.419512c-10.172687 0-18.419512-8.246825-18.419512-18.419512l0 0c0-10.172687 8.246825-18.419512 18.419512-18.419512l184.659697 0C806.382169 493.580488 814.62797 501.827313 814.62797 512L814.62797 512z" />
            <path d="M814.62797 609.214089c0 10.172687-8.246825 18.419512-18.419512 18.419512L611.548762 627.6336c-10.172687 0-18.419512-8.246825-18.419512-18.419512l0 0c0-10.172687 8.246825-18.419512 18.419512-18.419512l184.659697 0C806.382169 590.794577 814.62797 599.041402 814.62797 609.214089L814.62797 609.214089z" />
            <path d="M513.291924 628.996644c-9.476839-31.974225-29.40368-60.7322-56.109925-80.975243-9.865695-7.479345-20.415982-13.68979-31.483038-18.594497 18.152429-16.762779 29.52443-40.758286 29.52443-67.414389 0-50.667983-41.075511-91.742471-91.743494-91.742471-50.669006 0-91.743494 41.075511-91.743494 91.742471 0 26.151613 10.942213 49.745984 28.497031 66.457598-12.0525 5.122671-23.511483 11.782348-34.166147 19.924795-26.813692 20.488637-46.692439 49.54644-55.973826 81.818447-2.812045 9.777691 2.834558 19.981077 12.611226 22.793122 1.701758 0.490164 3.413749 0.722454 5.100158 0.722454 8.002254 0 15.371082-5.258771 17.692964-13.332656 14.027481-48.774867 57.643861-83.60821 107.793028-87.207178 3.346211 0.369414 6.744611 0.566912 10.18906 0.566912 2.982938 0 5.931083-0.148379 8.842389-0.425695 48.947805 4.304026 91.533716 38.507012 105.650225 86.134753 2.889817 9.752108 13.138228 15.315824 22.89443 12.426007C510.618025 649.001257 516.181741 638.749776 513.291924 628.996644zM371.591645 516.314259c-3.222391-0.193405-6.464225-0.290619-9.721409-0.290619-2.430352 0-4.849448 0.060375-7.261381 0.166799-26.069749-4.253884-46.033429-26.923186-46.033429-54.1769 0-30.274514 24.629957-54.903447 54.904471-54.903447s54.904471 24.628934 54.904471 54.903447C418.383344 489.531266 398.032854 512.38067 371.591645 516.314259z" />
          </S.Svg>
          <Input01
            type="text"
            placeholder="이메일을 입력하세요."
            register={register("email")}
            error={formState.errors.email?.message}
          />
        </S.Label>
        <S.Label>
          <S.Svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M522.368 10.3936c-144.1536 0-252.9024 114.6624-252.9024 266.752l0 93.7472-8.192 0c-75.776 0-137.4464 63.3088-137.4464 141.0816l0 360.5248c0 77.7728 61.6704 141.1072 137.4464 141.1072l524.3392 0c75.776 0 137.4464-63.3344 137.4464-141.1072L923.0592 511.9744c0-77.7728-61.6704-141.0816-137.4464-141.0816l-4.5056 0c-1.2032-0.4352-2.4576-0.5632-3.712-0.768l0-93.0048C777.4464 125.0816 667.8016 10.3936 522.368 10.3936L522.368 10.3936zM522.368 52.224c123.52 0 213.248 94.592 213.248 224.9472l0 92.3648L311.3216 369.536l0-92.3648C311.3216 146.816 400.0768 52.224 522.368 52.224L522.368 52.224zM881.28 511.9744l0 360.5248c0 54.7328-42.9312 99.2768-95.616 99.2768L261.2992 971.776c-52.736 0-95.616-44.544-95.616-99.2768L165.6832 511.9744c0-54.7072 42.88-99.2512 95.616-99.2512l50.0224 0 0-1.3824 424.2688 0 0 1.3824 50.048 0C838.3488 412.7488 881.28 457.2672 881.28 511.9744L881.28 511.9744zM881.28 511.9744M518.8608 568.0384c-33.5104 0-60.672 28.0064-60.672 62.5664 0 23.1168 12.2368 43.3408 30.336 54.1696l0 102.1952c0 17.2544 13.568 31.3088 30.336 31.3088 16.7424 0 30.336-14.0544 30.336-31.3088L549.1968 684.8c18.0992-10.8288 30.3104-31.0272 30.3104-54.1696C579.456 596.0704 552.32 568.0384 518.8608 568.0384L518.8608 568.0384zM518.8608 568.0384" />
          </S.Svg>
          <Input01
            type="password"
            placeholder="비밀번호를 입력하세요."
            register={register("password")}
            error={formState.errors.password?.message}
          />
        </S.Label>
        <S.Label>
          <S.Svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M522.368 10.3936c-144.1536 0-252.9024 114.6624-252.9024 266.752l0 93.7472-8.192 0c-75.776 0-137.4464 63.3088-137.4464 141.0816l0 360.5248c0 77.7728 61.6704 141.1072 137.4464 141.1072l524.3392 0c75.776 0 137.4464-63.3344 137.4464-141.1072L923.0592 511.9744c0-77.7728-61.6704-141.0816-137.4464-141.0816l-4.5056 0c-1.2032-0.4352-2.4576-0.5632-3.712-0.768l0-93.0048C777.4464 125.0816 667.8016 10.3936 522.368 10.3936L522.368 10.3936zM522.368 52.224c123.52 0 213.248 94.592 213.248 224.9472l0 92.3648L311.3216 369.536l0-92.3648C311.3216 146.816 400.0768 52.224 522.368 52.224L522.368 52.224zM881.28 511.9744l0 360.5248c0 54.7328-42.9312 99.2768-95.616 99.2768L261.2992 971.776c-52.736 0-95.616-44.544-95.616-99.2768L165.6832 511.9744c0-54.7072 42.88-99.2512 95.616-99.2512l50.0224 0 0-1.3824 424.2688 0 0 1.3824 50.048 0C838.3488 412.7488 881.28 457.2672 881.28 511.9744L881.28 511.9744zM881.28 511.9744M518.8608 568.0384c-33.5104 0-60.672 28.0064-60.672 62.5664 0 23.1168 12.2368 43.3408 30.336 54.1696l0 102.1952c0 17.2544 13.568 31.3088 30.336 31.3088 16.7424 0 30.336-14.0544 30.336-31.3088L549.1968 684.8c18.0992-10.8288 30.3104-31.0272 30.3104-54.1696C579.456 596.0704 552.32 568.0384 518.8608 568.0384L518.8608 568.0384zM518.8608 568.0384" />
          </S.Svg>
          <Input01
            type="password"
            placeholder="비밀번호를 한 번 더 입력하세요."
            register={register("passwordConfirm")}
            error={formState.errors.passwordConfirm?.message}
          />
        </S.Label>
        <S.Label>
          <S.Svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M252.810304 1024l511.98976 0c26.459631 0 48.00416-21.544529 48.00416-48.00416l0-927.99168c0-26.459631-21.544529-48.00416-48.00416-48.00416l-511.98976 0c-26.459631 0-48.00416 21.544529-48.00416 48.00416l0 927.99168c0 26.459631 21.544529 48.00416 48.00416 48.00416zM236.815744 48.02464c0-8.826703 7.167857-15.99456 15.99456-15.99456l511.98976 0c8.826703 0 15.99456 7.167857 15.99456 15.99456l0 927.99168c0 8.826703-7.167857 15.99456-15.99456 15.99456l-511.98976 0c-8.826703 0-15.99456-7.167857-15.99456-15.99456l0-927.99168zM284.799424 864.01344l447.99104 0c8.826703 0 15.99456-7.167857 15.99456-15.99456l0-671.9968c0-8.826703-7.167857-15.99456-15.99456-15.99456l-447.99104 0c-8.826703 0-15.99456 7.167857-15.99456 15.99456l0 671.9968c0 8.826703 7.167857 15.99456 15.99456 15.99456zM300.814464 192.01664l416.00192 0 0 639.9872-416.00192 0 0-639.9872zM492.810624 928.01216c0 17.673887 14.335713 32.0096 32.0096 32.0096s32.0096-14.335713 32.0096-32.0096c0-17.673887-14.335713-32.0096-32.0096-32.0096s-32.0096 14.335713-32.0096 32.0096zM444.806464 128.01792l127.99744 0c8.826703 0 15.99456-7.167857 15.99456-15.99456s-7.167857-15.99456-15.99456-15.99456l-127.99744 0c-8.826703 0-15.99456 7.167857-15.99456 15.99456s7.167857 15.99456 15.99456 15.99456z" />
          </S.Svg>
          <Input01
            type="text"
            placeholder="휴대폰 번호를 입력하세요."
            register={register("phoneNumber")}
            error={formState.errors.phoneNumber?.message}
          />
          <S.Btn1 type="button" onClick={onClickCertNumber}>
            인증번호받기
          </S.Btn1>
        </S.Label>
        <S.Label>
          <S.Svg
            viewBox="0 0 1025 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M469.842763 470.334273c3.747765 0 7.51601-1.310694 10.567469-3.973041l362.140597-317.49509-21.114458-24.063519-362.140597 317.474611c-6.655867 5.816204-7.331693 15.933121-1.474531 22.588988 3.174337 3.624888 7.577448 5.468051 12.02152 5.468051zM326.0146 1023.97952c196.542629 0 313.972601-154.559469 313.972601-303.99904 0-43.068579-10.301234-90.51979-25.538049-121.341573l144.708786-72.354393c5.406612-2.723786 8.826703-8.253275 8.826703-14.294754l0-127.99744 96.00832 0c0.348153 0 3.256255-0.184316 3.624888-0.184316 21.319254-1.433571 27.688406-8.232795 28.384712-31.804804l0-127.99744 96.00832 0c4.136877 0 6.98354 0.450551 8.888142 0.737265 3.870643 0.614388 11.099938 1.720286 17.366693-3.911602 6.471551-5.754765 6.184836-13.065979 5.918602-19.49657-0.061439-2.293714-0.184316-5.345173-0.184316-9.338693l0-144.9955c0-25.927161-21.093978-47.00066-47.00066-47.00066l-124.00392 0c-11.325213 0-22.343233 4.136877-31.0061 11.652887l-421.98196 369.922842c-20.766305-4.157357-52.161517-9.563969-74.01324-9.563969-179.749365 0-325.973641 146.244755-325.973641 325.973641s146.244755 326.0146 326.0146 326.0146zM326.0146 404.00088c16.035519 0 43.47817 3.850163 75.323934 10.48555 4.956061 1.085418 10.055479-0.327673 13.823724-3.624888l427.859603-375.104178c2.785224-2.437071 6.328193-3.768245 9.953081-3.768245l124.00392 0c8.294234 0 15.01154 6.717306 15.01154 15.01154l0 144.9955-112.00288 0c-8.826703 0-15.99456 7.167857-15.99456 15.99456l0 143.992-112.00288 0c-8.826703 0-15.99456 7.167857-15.99456 15.99456l0 134.100358-151.159857 75.590168c-4.198316 2.088918-7.270255 5.959561-8.376152 10.48555s-0.184316 9.379652 2.559949 13.188856c14.089958 19.414652 28.9991 67.644087 28.9991 118.617788 0 133.690766-105.469891 271.98944-281.98348 271.98944-162.116438 0-294.005-131.909042-294.005-294.005s131.909042-293.98452 294.005-293.98452zM271.98944 863.99296c61.766445 0 112.00288-50.236435 112.00288-112.00288s-50.236435-112.00288-112.00288-112.00288-112.00288 50.236435-112.00288 112.00288 50.236435 112.00288 112.00288 112.00288zM271.98944 671.9968c44.092558 0 79.99328 35.900722 79.99328 79.99328s-35.900722 79.99328-79.99328 79.99328-79.99328-35.900722-79.99328-79.99328 35.900722-79.99328 79.99328-79.99328z" />
          </S.Svg>
          <Input01
            type="text"
            placeholder="인증번호를 입력하세요."
            register={register("keyNumber")}
            error={formState.errors.keyNumber?.message}
          />
          {openTime && <CountDown min={3} sec={0} />}
          <S.Btn2 type="button" onClick={onClickCertConfirm}>
            인증번호확인
          </S.Btn2>
        </S.Label>

        <S.AddressWrapper>
          <S.Label>
            <S.Svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.397647 488.508235c36.743529 0 71.077647-14.456471 96.978824-40.357647 25.901176-25.901176 40.357647-60.235294 40.357647-96.978824s-14.456471-71.077647-40.357647-96.978824c-25.901176-25.901176-60.235294-40.357647-96.978824-40.357647S440.32 228.894118 414.418824 254.795294c-25.901176 25.901176-40.357647 60.235294-40.357647 96.978824s14.456471 71.077647 40.357647 96.978824C440.32 474.654118 475.256471 488.508235 511.397647 488.508235zM440.32 280.094118c19.275294-19.275294 44.574118-29.515294 71.68-29.515294s52.404706 10.24 71.68 29.515294c19.275294 19.275294 29.515294 44.574118 29.515294 71.68S602.352941 403.576471 583.077647 422.851765l0 0c-19.275294 19.275294-44.574118 29.515294-71.68 29.515294s-52.404706-10.24-71.68-29.515294c-19.275294-19.275294-29.515294-44.574118-29.515294-71.68S421.044706 299.369412 440.32 280.094118z" />
              <path d="M511.397647 802.334118l230.701176-230.701176c61.44-61.44 95.774118-143.962353 95.774118-230.701176s-33.731765-169.261176-95.774118-230.701176C680.658824 48.188235 598.738824 14.456471 511.397647 14.456471S342.738824 48.188235 280.696471 110.230588C219.256471 171.670588 184.922353 253.590588 184.922353 340.931765s33.731765 169.261176 95.774118 230.701176L511.397647 802.334118zM306.597647 135.529412C361.411765 80.715294 434.296471 50.597647 511.397647 50.597647s150.588235 30.117647 205.402353 84.931765c54.814118 54.814118 84.931765 127.698824 84.931765 205.402353s-30.117647 150.588235-84.931765 205.402353l-205.402353 205.402353L306.597647 546.334118c-54.814118-54.814118-84.931765-127.698824-84.931765-205.402353S251.783529 190.343529 306.597647 135.529412z" />
              <path d="M1008.338824 943.284706l-103.002353-357.797647c-6.023529-20.48-27.708235-35.538824-51.2-35.538824l-57.223529 0c-10.24 0-18.070588 7.830588-18.070588 18.070588s7.830588 18.070588 18.070588 18.070588l57.223529 0c7.830588 0 15.058824 5.421176 16.263529 9.637647l103.002353 357.797647c1.204706 4.818824 1.204706 9.637647-0.602353 12.047059-1.204706 1.807059-3.614118 3.011765-7.228235 3.011765L57.223529 968.583529c-3.011765 0-5.421176-1.204706-7.228235-3.011765-1.807059-2.409412-2.409412-7.228235-0.602353-12.047059l103.002353-357.797647c1.204706-3.614118 8.432941-9.637647 16.263529-9.637647l60.235294 0c10.24 0 18.070588-7.830588 18.070588-18.070588s-7.830588-18.070588-18.070588-18.070588l-60.235294 0c-23.491765 0-45.176471 15.058824-51.2 35.538824L15.058824 943.284706c-4.818824 16.263529-2.409412 31.924706 6.625882 43.971765 8.432941 10.842353 21.082353 16.865882 36.141176 16.865882l908.348235 0c14.456471 0 27.708235-6.023529 36.141176-16.865882C1010.748235 975.209412 1013.157647 959.548235 1008.338824 943.284706z" />
            </S.Svg>
            <Input01
              type="text"
              placeholder="주소 검색 버튼을 누르세요. 자동으로 채워집니다."
              register={register("zipcode")}
              error={formState.errors.zipcode?.message}
            />{" "}
            <ZipcodeModal setValue={setValue} />
          </S.Label>
          <S.Label>
            <S.Svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.397647 488.508235c36.743529 0 71.077647-14.456471 96.978824-40.357647 25.901176-25.901176 40.357647-60.235294 40.357647-96.978824s-14.456471-71.077647-40.357647-96.978824c-25.901176-25.901176-60.235294-40.357647-96.978824-40.357647S440.32 228.894118 414.418824 254.795294c-25.901176 25.901176-40.357647 60.235294-40.357647 96.978824s14.456471 71.077647 40.357647 96.978824C440.32 474.654118 475.256471 488.508235 511.397647 488.508235zM440.32 280.094118c19.275294-19.275294 44.574118-29.515294 71.68-29.515294s52.404706 10.24 71.68 29.515294c19.275294 19.275294 29.515294 44.574118 29.515294 71.68S602.352941 403.576471 583.077647 422.851765l0 0c-19.275294 19.275294-44.574118 29.515294-71.68 29.515294s-52.404706-10.24-71.68-29.515294c-19.275294-19.275294-29.515294-44.574118-29.515294-71.68S421.044706 299.369412 440.32 280.094118z" />
              <path d="M511.397647 802.334118l230.701176-230.701176c61.44-61.44 95.774118-143.962353 95.774118-230.701176s-33.731765-169.261176-95.774118-230.701176C680.658824 48.188235 598.738824 14.456471 511.397647 14.456471S342.738824 48.188235 280.696471 110.230588C219.256471 171.670588 184.922353 253.590588 184.922353 340.931765s33.731765 169.261176 95.774118 230.701176L511.397647 802.334118zM306.597647 135.529412C361.411765 80.715294 434.296471 50.597647 511.397647 50.597647s150.588235 30.117647 205.402353 84.931765c54.814118 54.814118 84.931765 127.698824 84.931765 205.402353s-30.117647 150.588235-84.931765 205.402353l-205.402353 205.402353L306.597647 546.334118c-54.814118-54.814118-84.931765-127.698824-84.931765-205.402353S251.783529 190.343529 306.597647 135.529412z" />
              <path d="M1008.338824 943.284706l-103.002353-357.797647c-6.023529-20.48-27.708235-35.538824-51.2-35.538824l-57.223529 0c-10.24 0-18.070588 7.830588-18.070588 18.070588s7.830588 18.070588 18.070588 18.070588l57.223529 0c7.830588 0 15.058824 5.421176 16.263529 9.637647l103.002353 357.797647c1.204706 4.818824 1.204706 9.637647-0.602353 12.047059-1.204706 1.807059-3.614118 3.011765-7.228235 3.011765L57.223529 968.583529c-3.011765 0-5.421176-1.204706-7.228235-3.011765-1.807059-2.409412-2.409412-7.228235-0.602353-12.047059l103.002353-357.797647c1.204706-3.614118 8.432941-9.637647 16.263529-9.637647l60.235294 0c10.24 0 18.070588-7.830588 18.070588-18.070588s-7.830588-18.070588-18.070588-18.070588l-60.235294 0c-23.491765 0-45.176471 15.058824-51.2 35.538824L15.058824 943.284706c-4.818824 16.263529-2.409412 31.924706 6.625882 43.971765 8.432941 10.842353 21.082353 16.865882 36.141176 16.865882l908.348235 0c14.456471 0 27.708235-6.023529 36.141176-16.865882C1010.748235 975.209412 1013.157647 959.548235 1008.338824 943.284706z" />
            </S.Svg>
            <Input01
              type="text"
              placeholder="주소를 기입하세요."
              register={register("address")}
              error={formState.errors.address?.message}
            />
          </S.Label>
          <S.Label>
            <S.Svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.397647 488.508235c36.743529 0 71.077647-14.456471 96.978824-40.357647 25.901176-25.901176 40.357647-60.235294 40.357647-96.978824s-14.456471-71.077647-40.357647-96.978824c-25.901176-25.901176-60.235294-40.357647-96.978824-40.357647S440.32 228.894118 414.418824 254.795294c-25.901176 25.901176-40.357647 60.235294-40.357647 96.978824s14.456471 71.077647 40.357647 96.978824C440.32 474.654118 475.256471 488.508235 511.397647 488.508235zM440.32 280.094118c19.275294-19.275294 44.574118-29.515294 71.68-29.515294s52.404706 10.24 71.68 29.515294c19.275294 19.275294 29.515294 44.574118 29.515294 71.68S602.352941 403.576471 583.077647 422.851765l0 0c-19.275294 19.275294-44.574118 29.515294-71.68 29.515294s-52.404706-10.24-71.68-29.515294c-19.275294-19.275294-29.515294-44.574118-29.515294-71.68S421.044706 299.369412 440.32 280.094118z" />
              <path d="M511.397647 802.334118l230.701176-230.701176c61.44-61.44 95.774118-143.962353 95.774118-230.701176s-33.731765-169.261176-95.774118-230.701176C680.658824 48.188235 598.738824 14.456471 511.397647 14.456471S342.738824 48.188235 280.696471 110.230588C219.256471 171.670588 184.922353 253.590588 184.922353 340.931765s33.731765 169.261176 95.774118 230.701176L511.397647 802.334118zM306.597647 135.529412C361.411765 80.715294 434.296471 50.597647 511.397647 50.597647s150.588235 30.117647 205.402353 84.931765c54.814118 54.814118 84.931765 127.698824 84.931765 205.402353s-30.117647 150.588235-84.931765 205.402353l-205.402353 205.402353L306.597647 546.334118c-54.814118-54.814118-84.931765-127.698824-84.931765-205.402353S251.783529 190.343529 306.597647 135.529412z" />
              <path d="M1008.338824 943.284706l-103.002353-357.797647c-6.023529-20.48-27.708235-35.538824-51.2-35.538824l-57.223529 0c-10.24 0-18.070588 7.830588-18.070588 18.070588s7.830588 18.070588 18.070588 18.070588l57.223529 0c7.830588 0 15.058824 5.421176 16.263529 9.637647l103.002353 357.797647c1.204706 4.818824 1.204706 9.637647-0.602353 12.047059-1.204706 1.807059-3.614118 3.011765-7.228235 3.011765L57.223529 968.583529c-3.011765 0-5.421176-1.204706-7.228235-3.011765-1.807059-2.409412-2.409412-7.228235-0.602353-12.047059l103.002353-357.797647c1.204706-3.614118 8.432941-9.637647 16.263529-9.637647l60.235294 0c10.24 0 18.070588-7.830588 18.070588-18.070588s-7.830588-18.070588-18.070588-18.070588l-60.235294 0c-23.491765 0-45.176471 15.058824-51.2 35.538824L15.058824 943.284706c-4.818824 16.263529-2.409412 31.924706 6.625882 43.971765 8.432941 10.842353 21.082353 16.865882 36.141176 16.865882l908.348235 0c14.456471 0 27.708235-6.023529 36.141176-16.865882C1010.748235 975.209412 1013.157647 959.548235 1008.338824 943.284706z" />
            </S.Svg>
            <Input01
              type="text"
              placeholder="상세 주소를 기입하세요."
              register={register("addressDetail")}
              error={formState.errors.addressDetail?.message}
            />
          </S.Label>
        </S.AddressWrapper>
        <S.Label>
          <S.Svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1002.602667 318.912c-11.818667 0-21.354667 9.578667-21.354667 21.376l0 515.114667c0 69.376-56.448 125.824-125.824 125.824L168.554667 981.226667c-69.376 0-125.824-56.448-125.824-125.824L42.730667 168.533333c0-69.376 56.448-125.824 125.824-125.824L683.733333 42.709333c11.818667 0 21.354667-9.557333 21.354667-21.354667C705.088 9.557333 695.552 0 683.733333 0L168.554667 0C75.605333 0 0 75.605333 0 168.554667L0 855.466667C0 948.373333 75.605333 1024 168.554667 1024L855.466667 1024c92.906667 0 168.533333-75.626667 168.512-168.533333L1023.978667 340.288C1023.978667 328.490667 1014.421333 318.912 1002.602667 318.912z" />
            <path d="M274.112 597.994667c-0.64 0.917333-1.514667 1.578667-2.048 2.624l-122.666667 245.290667c-4.096 8.213333-2.474667 18.133333 4.032 24.661333 4.074667 4.053333 9.557333 6.250667 15.125333 6.250667 3.242667 0 6.528-0.746667 9.557333-2.261333l245.290667-122.602667c1.216-0.597333 2.048-1.621333 3.093333-2.410667 0.789333-0.576 1.728-0.896 2.453333-1.621333L894.933333 281.898667c0.042667-0.042667 0.106667-0.042667 0.149333-0.085333s0.064-0.106667 0.106667-0.149333l70.485333-70.485333c17.962667-17.941333 27.882667-41.792 27.882667-67.157333s-9.92-49.194667-27.882667-67.157333l-18.581333-18.56c-17.92-17.962667-41.749333-27.818667-67.114667-27.818667s-49.173333 9.856-67.114667 27.818667l-536.746667 536.746667C275.221333 595.904 274.794667 597.034667 274.112 597.994667zM297.045333 646.208l80.768 80.746667-161.514667 80.746667L297.045333 646.208zM843.050667 88.533333c19.754667-19.733333 54.08-19.776 73.834667 0l18.581333 18.538667c9.877333 9.856 15.338667 22.997333 15.338667 36.928 0 13.952-5.461333 27.072-15.338667 36.949333l-55.509333 55.509333-92.416-92.437333L843.050667 88.533333zM757.333333 174.250667l92.416 92.437333L413.866667 702.592 321.429333 610.133333 757.333333 174.250667z" />
          </S.Svg>
          <Input01
            type="text"
            placeholder="지구에서 사용할 닉네임을 기입하세요."
            register={register("nickname")}
            error={formState.errors.nickname?.message}
          />
          <S.Btn1 type="button" onClick={onClickNameConfirm}>
            중복확인
          </S.Btn1>
        </S.Label>
        <S.InfoWrapper>
          <S.SubTitle>크리에이터 추가정보</S.SubTitle>
          <S.SnsLabel>
            <S.SnsLabelInner>
              <S.Svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M608 960H416c-44.112 0-80-35.888-80-80v-17.6c0-57.68-27.232-112.64-74.72-150.832C153.2 624.576 98.464 489.92 114.88 351.328 136.464 169.248 284.448 22.544 466.784 2.496A416.8 416.8 0 0 1 512 0c220.56 0 400 179.44 400 400 0 123.632-55.856 238.336-153.232 314.704-44.32 34.72-70.768 90.88-70.768 150.192V880c0 44.112-35.888 80-80 80zM512 32c-13.808 0-27.856 0.768-41.728 2.304-167.68 18.432-303.792 153.36-323.6 320.784-15.104 127.568 35.232 251.52 134.672 331.536C336.4 730.928 368 794.992 368 862.4V880c0 26.464 21.536 48 48 48h192c26.464 0 48-21.536 48-48v-15.104c0-69.072 31.04-134.624 83.008-175.376C828.608 619.28 880 513.728 880 400 880 197.088 714.928 32 512 32z"
                  fill="#1D1D1D"
                />
                <path
                  d="M544 1024h-64c-26.464 0-48-21.536-48-48v-32a16 16 0 1 1 32 0v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 1 1 32 0v32c0 26.464-21.536 48-48 48zM650.432 624c-2.56 0-5.168-0.64-7.52-1.872L512 552.32l-130.912 69.792a16.032 16.032 0 0 1-23.312-16.8l25.072-148.096-106.096-104.848a16 16 0 0 1 8.928-27.2l146.4-21.584 65.536-134.608c5.376-11.008 23.392-11.008 28.768 0l65.52 134.608 146.432 21.584a16 16 0 0 1 8.912 27.2l-106.08 104.848 25.056 148.096A16.032 16.032 0 0 1 650.432 624zM512 518.208c2.592 0 5.168 0.624 7.52 1.872l109.712 58.48-21.008-124.192a16.064 16.064 0 0 1 4.528-14.048l89.2-88.16-123.056-18.128a15.984 15.984 0 0 1-12.064-8.832L512 212.56l-54.832 112.64a15.984 15.984 0 0 1-12.064 8.832l-123.056 18.128 89.2 88.16c3.712 3.68 5.392 8.912 4.528 14.048l-21.008 124.192 109.696-58.48a15.968 15.968 0 0 1 7.536-1.872zM672 896H496a16 16 0 1 1 0-32h176a16 16 0 1 1 0 32zM677.76 832H576a16 16 0 1 1 0-32h101.76a16 16 0 1 1 0 32zM448 896c-4.16 0-8.32-1.76-11.36-4.64-2.88-3.04-4.64-7.04-4.64-11.36 0-4.32 1.76-8.32 4.64-11.36 5.92-5.92 16.8-5.92 22.72 0 2.88 3.04 4.64 7.2 4.64 11.36s-1.76 8.32-4.64 11.36c-3.04 2.88-7.2 4.64-11.36 4.64zM64 416H16a16 16 0 1 1 0-32h48a16 16 0 1 1 0 32zM1008 416h-48a16 16 0 1 1 0-32h48a16 16 0 1 1 0 32zM195.216 99.216a15.952 15.952 0 0 1-11.312-4.688L149.968 60.592a16 16 0 1 1 22.624-22.624l33.936 33.936a16 16 0 0 1-11.312 27.312zM862.72 766.72a15.952 15.952 0 0 1-11.312-4.688l-33.936-33.936a16 16 0 1 1 22.624-22.624l33.92 33.92a16 16 0 0 1-11.296 27.328zM828.784 99.216a16 16 0 0 1-11.312-27.312l33.92-33.936a16 16 0 1 1 22.64 22.624l-33.936 33.936a15.952 15.952 0 0 1-11.312 4.688zM161.28 766.72a16 16 0 0 1-11.312-27.312l33.936-33.936a16 16 0 1 1 22.624 22.624l-33.92 33.92a15.952 15.952 0 0 1-11.328 4.704z"
                  fill="#1D1D1D"
                />
                <path
                  d="M98.112 244.56a16 16 0 0 1-6.128-1.232l-44.352-18.352a16 16 0 0 1 12.24-29.568l44.368 18.368a16 16 0 0 1-6.128 30.784zM970.24 605.808a15.984 15.984 0 0 1-6.112-1.216l-44.368-18.368a16 16 0 0 1 12.256-29.568l44.352 18.368a16 16 0 0 1-6.112 30.784z"
                  fill="#1D1D1D"
                />
                <path
                  d="M925.888 244.56a16 16 0 0 1-6.128-30.784l44.368-18.368a16 16 0 0 1 12.256 29.568l-44.368 18.352a16 16 0 0 1-6.128 1.232zM53.76 605.808a16 16 0 0 1-6.128-30.784l44.352-18.368a16 16 0 0 1 12.256 29.568l-44.368 18.368a15.984 15.984 0 0 1-6.128 1.216z"
                  fill="#1D1D1D"
                />
              </S.Svg>
              <Input01
                type="text"
                placeholder="인스타그램 이름 또는 유튜브 채널명을 입력하세요."
                register={register("snsName")}
                error={formState.errors.snsName?.message}
              />
            </S.SnsLabelInner>
            <S.SnsLabelInner>
              <S.SnsCheckWrapper
                className="wrapper"
                error={formState.errors.snsChannel?.message}
              >
                <S.LabelWrapper>
                  <S.RadioInput
                    type="radio"
                    value={"INSTAGRAM"}
                    {...register("snsChannel")}
                  />
                  <S.RadioPulse className="radio-pulse" />
                  <S.RadioButton className="radio-button" />
                  <S.RadioButtonInner className="radio-button-inner"></S.RadioButtonInner>
                  <S.RadioLabel className="radio-label">
                    인스타그램
                  </S.RadioLabel>
                </S.LabelWrapper>
                <S.LabelWrapper>
                  <S.RadioInput
                    type="radio"
                    value={"YOUTUBE"}
                    {...register("snsChannel")}
                  />
                  <S.RadioPulse className="radio-pulse" />
                  <S.RadioButton className="radio-button" />
                  <S.RadioButtonInner className="radio-button-inner"></S.RadioButtonInner>
                  <S.RadioLabel className="radio-label">유튜버</S.RadioLabel>
                </S.LabelWrapper>
              </S.SnsCheckWrapper>
            </S.SnsLabelInner>
            <Upload01 onChangeCertifiFile={onChangeCertifiFile} />
          </S.SnsLabel>
          <S.UpoloadWrapper>
            <S.ProfileWrapper>
              {profilePreview ? (
                <img src={profilePreview} alt="프리뷰 이미지" />
              ) : (
                <img src="/users/user/img_id.svg" alt="기본 이미지" />
              )}
            </S.ProfileWrapper>
            <Upload02 onChageProfileFile={onChageProfileFile} />
          </S.UpoloadWrapper>
          <S.Concept
            placeholder="주력 콘텐츠를 입력하세요. 예) 뷰티, 브이로그, 게임"
            {...register("mainContents")}
          />
          <S.Introduce
            placeholder="구매자에게 자신을 소개해주세요."
            {...register("introduce")}
          />
          <S.CountWrapper>
            <S.Label>
              <S.Svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M136.734118 770.409412l79.510588 0c0 0 0 0 0 0 6.625882 0 12.047059-5.421176 12.047059-12.047059 0-6.625882-5.421176-12.047059-12.047059-12.047059l-79.510588 0c0 0 0 0 0 0-6.625882 0-12.047059 5.421176-12.047059 12.047059C124.687059 764.988235 130.108235 770.409412 136.734118 770.409412z" />
                <path d="M136.734118 830.042353l185.524706 0.602353c0 0 0 0 0 0 6.625882 0 12.047059-5.421176 12.047059-12.047059 0-6.625882-5.421176-12.047059-12.047059-12.047059l-185.524706-0.602353c0 0 0 0 0 0-6.625882 0-12.047059 5.421176-12.047059 12.047059C124.687059 824.621176 130.108235 830.042353 136.734118 830.042353z" />
                <path d="M842.089412 63.849412 183.717647 63.849412C89.750588 63.849412 12.649412 140.950588 12.649412 234.917647l0 148.178824 0 43.971765L12.649412 764.988235c0 93.967059 76.498824 171.068235 171.068235 171.068235l657.769412 0c93.967059 0 171.068235-76.498824 171.068235-171.068235L1012.555294 427.068235l0-43.971765L1012.555294 234.917647C1012.555294 140.950588 936.056471 63.849412 842.089412 63.849412zM976.414118 764.988235c0 74.089412-60.235294 134.927059-134.927059 134.927059L183.717647 899.915294c-74.089412 0-134.927059-60.235294-134.927059-134.927059L48.790588 427.068235l927.623529 0L976.414118 764.988235zM48.790588 383.096471 48.790588 234.917647c0-74.089412 60.235294-134.927059 134.927059-134.927059l657.769412 0c74.089412 0 134.927059 60.235294 134.927059 134.927059l0 148.178824L48.790588 383.096471z" />
              </S.Svg>
              <Input01
                type="text"
                placeholder="정산받을 계좌번호를 숫자로만 입력하세요."
                register={register("account")}
                error={formState.errors.account?.message}
              />
            </S.Label>
            <S.Label>
              <S.Svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M942.08 860.16h-40.96v-40.96c0-17.408-13.312-30.72-30.72-30.72h-49.152c5.12-49.152 8.192-100.352 8.192-153.6s-2.048-104.448-8.192-153.6h116.736c22.528 0 40.96-18.432 40.96-40.96 0-7.168-2.048-19.456-13.312-29.696l-1.024-1.024L558.08 64.512c-26.624-22.528-65.536-22.528-93.184 0L60.416 409.6c-8.192 7.168-13.312 17.408-13.312 27.648-1.024 10.24 3.072 21.504 9.216 28.672 7.168 9.216 19.456 14.336 30.72 14.336h116.736c-5.12 47.104-8.192 96.256-9.216 153.6-1.024 46.08 1.024 94.208 7.168 153.6H153.6c-17.408 0-30.72 13.312-30.72 30.72v40.96H81.92c-17.408 0-30.72 13.312-30.72 30.72v51.2c0 17.408 13.312 30.72 30.72 30.72h860.16c17.408 0 30.72-13.312 30.72-30.72v-51.2c0-16.384-13.312-29.696-30.72-29.696zM87.04 440.32s1.024 0 1.024 1.024c0 0-1.024 0-1.024-1.024z m0 0L491.52 95.232c12.288-10.24 28.672-10.24 39.936 0L936.96 440.32H798.72c-18.432 0-43.008-1.024-73.728-3.072-51.2-3.072-122.88-7.168-212.992-7.168s-160.768 4.096-212.992 7.168c-30.72 2.048-55.296 3.072-73.728 3.072H87.04zM645.12 788.48V474.112c29.696 1.024 55.296 3.072 76.8 4.096 22.528 1.024 41.984 2.048 58.368 3.072 5.12 49.152 8.192 100.352 8.192 153.6s-3.072 104.448-8.192 153.6H645.12z m-403.456 0c-6.144-59.392-8.192-107.52-7.168-153.6 1.024-57.344 4.096-107.52 9.216-154.624 16.384-1.024 35.84-2.048 58.368-3.072s48.128-3.072 76.8-4.096V788.48H241.664zM419.84 472.064c27.648-1.024 58.368-1.024 92.16-1.024s64.512 1.024 92.16 1.024V788.48H419.84V472.064zM931.84 931.84H92.16v-30.72h40.96c17.408 0 30.72-13.312 30.72-30.72v-40.96h696.32v40.96c0 17.408 13.312 30.72 30.72 30.72h40.96v30.72z" />
              </S.Svg>
              <Input03
                type="text"
                placeholder="정산할 은행 코드를 입력하세요."
                register={register("bank")}
                error={formState.errors.bank?.message}
                setValue={setValue}
              />
            </S.Label>
            <S.Label>
              <S.Svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1002.602667 318.912c-11.818667 0-21.354667 9.578667-21.354667 21.376l0 515.114667c0 69.376-56.448 125.824-125.824 125.824L168.554667 981.226667c-69.376 0-125.824-56.448-125.824-125.824L42.730667 168.533333c0-69.376 56.448-125.824 125.824-125.824L683.733333 42.709333c11.818667 0 21.354667-9.557333 21.354667-21.354667C705.088 9.557333 695.552 0 683.733333 0L168.554667 0C75.605333 0 0 75.605333 0 168.554667L0 855.466667C0 948.373333 75.605333 1024 168.554667 1024L855.466667 1024c92.906667 0 168.533333-75.626667 168.512-168.533333L1023.978667 340.288C1023.978667 328.490667 1014.421333 318.912 1002.602667 318.912z" />
                <path d="M274.112 597.994667c-0.64 0.917333-1.514667 1.578667-2.048 2.624l-122.666667 245.290667c-4.096 8.213333-2.474667 18.133333 4.032 24.661333 4.074667 4.053333 9.557333 6.250667 15.125333 6.250667 3.242667 0 6.528-0.746667 9.557333-2.261333l245.290667-122.602667c1.216-0.597333 2.048-1.621333 3.093333-2.410667 0.789333-0.576 1.728-0.896 2.453333-1.621333L894.933333 281.898667c0.042667-0.042667 0.106667-0.042667 0.149333-0.085333s0.064-0.106667 0.106667-0.149333l70.485333-70.485333c17.962667-17.941333 27.882667-41.792 27.882667-67.157333s-9.92-49.194667-27.882667-67.157333l-18.581333-18.56c-17.92-17.962667-41.749333-27.818667-67.114667-27.818667s-49.173333 9.856-67.114667 27.818667l-536.746667 536.746667C275.221333 595.904 274.794667 597.034667 274.112 597.994667zM297.045333 646.208l80.768 80.746667-161.514667 80.746667L297.045333 646.208zM843.050667 88.533333c19.754667-19.733333 54.08-19.776 73.834667 0l18.581333 18.538667c9.877333 9.856 15.338667 22.997333 15.338667 36.928 0 13.952-5.461333 27.072-15.338667 36.949333l-55.509333 55.509333-92.416-92.437333L843.050667 88.533333zM757.333333 174.250667l92.416 92.437333L413.866667 702.592 321.429333 610.133333 757.333333 174.250667z" />
              </S.Svg>
              <Input01
                type="text"
                placeholder="예금주명을 입력하세요."
                register={register("accountName")}
                error={formState.errors.accountName?.message}
              />
            </S.Label>
          </S.CountWrapper>
        </S.InfoWrapper>

        <S.WrapperTermsOfUse error={formState.errors.terms?.message}>
          <label>개인정보 이용약관</label>
          <S.TermsOfUse>
            <p>[ 제로나인 이용 약관 ]</p>
            <p>
              제1장 총칙 이 사이트는 포트폴리오용 사이트로 실제 운영하지
              않습니다.
            </p>
            <p>
              제2장 회원 이 사이트는 포트폴리오용 사이트로 실제 운영하지
              않습니다.
            </p>
            <p>
              제3장 쇼핑몰 이 사이트는 포트폴리오용 사이트로 실제 운영하지
              않습니다.
            </p>
            <p>
              제3장 쇼핑몰 이 사이트는 포트폴리오용 사이트로 실제 운영하지
              않습니다.
            </p>
            <p>
              제3장 쇼핑몰 이 사이트는 포트폴리오용 사이트로 실제 운영하지
              않습니다.
            </p>
            <p>
              제3장 쇼핑몰 이 사이트는 포트폴리오용 사이트로 실제 운영하지
              않습니다.
            </p>
          </S.TermsOfUse>
          <S.TermsCheckWrapper>
            <S.InvisibleCheckbox
              type="checkbox"
              {...register("terms")}
              onChange={onChangeChecked}
            />
            <S.Checkbox className="checkbox"></S.Checkbox>
            <span> 동의합니다.</span>
          </S.TermsCheckWrapper>
        </S.WrapperTermsOfUse>
        <S.BtnWrapper>
          <S.SignUpBtn>가입하기</S.SignUpBtn>
          <S.CancelBtn onClick={onClickMoveToPage("/")}>취소</S.CancelBtn>
        </S.BtnWrapper>
      </S.Form>
    </S.Container>
  );
}
