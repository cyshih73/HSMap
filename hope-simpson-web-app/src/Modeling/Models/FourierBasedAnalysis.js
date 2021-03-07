import React from 'react';
import TableauDashboard from '../../TableauDashboard/TableauDashboard';


const TABLEAU_FFT_SAMPLE_URL = 'https://public.tableau.com/views/FFT_sample/1'
const TABLEAU_FFT_ANALYSIS_URL = 'https://public.tableau.com/views/seven_day_filtering_zero_padding_8KFFT/1';
const TABLEAU_SUN_DECLINATION_URL = 'https://public.tableau.com/views/SunDeclinationoverayear/1_1'
const TABLEAU_OPTIONS = { device: "desktop" };

function FourierBasedAnalysis() {
  return (
    <div>
      <h2>Sun Declination</h2>
      <p className="lead">Hope-Simpson hypothesized a relationship between the declination of the Sun on the rise and fall of influenza cases. In our Fourier-based analysis, our goal is to investigate any appearance of the influence of Sun declination on reported cases of COVID-19.</p>
      <p className="lead">The following formula is the declination of Sun over a year, where N is the day of the year beginning with N=0 at midnight Universal Time (UT) as January 1 begins. The error of the formula is less than +/- 0.2 degrees.</p>
      <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/583fa421f34aaf0bc31729bebc784ed8d17d9742" alt="Sun Declination"/>
      <p className="lead">The declination has a period of 365 days which is a frequency of 1/365 cycles/day (about 0.0027 cycles/day). And that is the peak of the spectrum.</p>
      <div style = {{height:400}}>
        <TableauDashboard
          url={ TABLEAU_SUN_DECLINATION_URL }
          options={ TABLEAU_OPTIONS }
        />
      </div>
      <h2>COVID-19 Data Spectral Analysis</h2>
      <p className="lead">
        To observe the frequency spectrum of COVID-19 cases, different latitudes are selected and compared with each other.
        In the Fourier-based Analysis, we are using the DFT(Discrete Fourier Transform) calculated using FFT(<a href="https://cnx.org/contents/gua6b7go@22.1:gGcNzVsy@10/Introduction-Fast-Fourier-Transforms">Fast Fourier Transform</a>) to transform the sequence of confirmed cases to the frequency spectrum.
        To facilitate this analysis, some specific steps were taken:
        <ul>
          <li>To remove some of the noisy variation found in daily cases reported, the confirmed cases are filtered using a seven-day average.</li>
          <li>Since confirmed cases are never negative, they would tend to exhibit a large average component in the DFT analysis.  This average value is subtracted from the sequence to remove it and to make it easier to see the impact of the various frequency components.</li>
          <li>To see if we can better resolve frequency components we apply a Kaiser window.  In our current analysis, the Kaiser window beta is zero. This makes the window equivalent to a rectangular window.</li>
          <li>To improve the resolution of the DFT, we utilized zero paddings to extend the data length to 8,192.</li>
          <li>To compare pairs of regions with a large difference in total cases, the FFTs are normalized by the maximum amplitude of the FFT.</li>
        </ul>
        Since we want to focus on the low-frequency components, the following plots are showing the low-frequency parts of the FFTs.
      </p>
      <h2>Sample of Fourier-based analysis</h2>
      <p className="lead">Looking at the Fourier-based analysis of Italy reported cases (here we show the reported daily cases, the seven-day moving average of the cases, and the DFT of these cases) we are beginning to see some interesting components whose frequencies are near or near multiples of the Sun’s declination frequency. </p>
      <div style = {{height:500}}>
        <TableauDashboard
          url={ TABLEAU_FFT_SAMPLE_URL }
          options={ TABLEAU_OPTIONS }
        />
      </div>
      <p className="lead">By looking at the curve of reported cases, we see the two bumps in cases, the first bump being due to the initial cases, and the second bump, several months later, corresponds to the winter outbreak.  This would tend to cause the DFT to report a frequency corresponding to a period of about half a year and a period of about a year.  We can also see higher harmonics.</p>
      <p className="lead">Finally, we have a few limitations that present themselves:
        <ul>
          <li>We actually do not have a complete yearly cycle of COVID-19 cases to analyze.  That situation will improve early in 2021.</li>
          <li>We are not at “steady-state” as is the case with influenza.</li>
          <li>We do still have a relatively small number of days of data</li>
        </ul>
      </p>
      <p className="lead">The next few graphs overlay regions from the same latitude region.  We can see some similarity between the DFT of these cases and harmonics that are similar to the Italy cases described above.</p>
      <div style = {{height:1100}}>
        <TableauDashboard
          url={ TABLEAU_FFT_ANALYSIS_URL }
          options={ TABLEAU_OPTIONS }
        />
      </div>
    </div>
  );
}

export default FourierBasedAnalysis;
