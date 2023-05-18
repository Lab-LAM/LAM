import React from "react";
import Publication from "../../components/Publication";
import Title from "../../components/Title";
import "./feed.css";

const Publicações = () => {
    return (
        <div className="feed">
            <Title title="Publicações" />
            <Publication
                title="Diagnosing the novel SARS-CoV-2 by quantitative RT-PCR: variations and opportunities. Journal of Molecular Medicine (JCR 5.606), 98(12), 1727-1736."
                doi="https://doi.org/10.1007%2Fs00109-020-01992-x"
                authors="Barreto, H. G., de Pádua Milagres, F. A., de Araújo, G. C., Daúde, M. M., & Benedito, V. A. (2020)."
            />
            <Publication
                title="Transcriptional profiling of the AFL subfamily of B3-type transcription factors during the in vitro induction of somatic embryogenesis in the model legume Medicago truncatula. Plant Cell, Tissue and Organ Culture (JCR 2.726), 139(2), 327-337."
                doi="https://doi.org/10.1007/s11240-019-01687-3"
                authors="Barreto, H. G., Ságio, S. A., Chalfun-Júnior, A., Fevereiro, P., & Benedito, V. A. (2019)."
            />
            <Publication
                title="Validation of reference genes for qPCR analysis of Coffea arabica L. somatic embryogenesis-related tissues. Plant Cell, Tissue and Organ Culture (JCR 2.726), 128, 663-678."
                doi="https://doi.org/10.1007/s11240-016-1147-6"
                authors="Freitas, N. C., Barreto, H. G., Fernandes-Brum, C. N., Moreira, R. O., Chalfun-Junior, A., & Paiva, L. V. (2017)."
            />
            <Publication
                title="Comparative assessment of three RNA extraction methods for obtaining high-quality RNA from Candida viswanathii biomass. Journal of Microbiological Methods (JCR 2.622), 184, 106200."
                doi="https://doi.org/10.1016/j.mimet.2021.106200"
                authors="Souza, M. R., Teixeira, R. C., Daúde, M. M., Augusto, A. N. L., Ságio, S. A., de Almeida, A. F., & Barreto, H. G. (2021)."
            />
            <Publication
                title="Reference gene selection for quantitative PCR in liver, skeletal muscle, and jejunum of Bos indicus cattle. Revista Brasileira de Zootecnia (JCR 1.000), 51:e20210120."
                doi="https://doi.org/10.37496/rbz5120210120"
                authors="Coelho, T. C., Chalfun-Junior, A., Barreto, H. G., Duarte, M. D. S., Garcia, B. D. O., Teixeira, P. D., Gionbelli, T. R. S. & Ladeira, M. M. (2022)."
            />
        </div>
    );
};

export default Publicações;
